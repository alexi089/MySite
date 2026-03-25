import pytest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient
import sys
import os

# Ensure backend root is on path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from main import app

client = TestClient(app)


def test_health():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_contact_no_api_key(monkeypatch):
    """Without API key, endpoint returns success without calling Resend."""
    monkeypatch.delenv("RESEND_API_KEY", raising=False)
    response = client.post(
        "/api/contact",
        json={"name": "Test User", "email": "test@example.com", "message": "Hello"},
    )
    assert response.status_code == 200
    assert response.json() == {"success": True}


def test_contact_with_api_key(monkeypatch):
    """With API key set, Resend.Emails.send is called."""
    monkeypatch.setenv("RESEND_API_KEY", "re_test_key")
    monkeypatch.setenv("TO_EMAIL", "alex@example.com")
    monkeypatch.setenv("FROM_EMAIL", "noreply@test.com")

    mock_send = MagicMock(return_value={"id": "email_123"})
    with patch("routes.contact.resend.Emails.send", mock_send):
        response = client.post(
            "/api/contact",
            json={"name": "Test User", "email": "test@example.com", "message": "Hello"},
        )
    assert response.status_code == 200
    assert response.json() == {"success": True}
    mock_send.assert_called_once()


def test_contact_invalid_email():
    """Invalid email returns 422 from Pydantic validation."""
    response = client.post(
        "/api/contact",
        json={"name": "Test", "email": "not-an-email", "message": "Hi"},
    )
    assert response.status_code == 422


def test_contact_missing_fields():
    """Missing required fields returns 422."""
    response = client.post("/api/contact", json={"name": "Test"})
    assert response.status_code == 422
