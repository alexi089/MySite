import os
from fastapi import APIRouter, HTTPException
import resend
from dotenv import load_dotenv

from models import ContactRequest

load_dotenv()

router = APIRouter()

resend.api_key = os.getenv("RESEND_API_KEY", "")


@router.post("/contact")
async def send_contact_email(body: ContactRequest) -> dict:
    api_key = os.getenv("RESEND_API_KEY", "")
    if not api_key:
        # No API key configured — log and return success to avoid exposing config state
        print(f"[contact] RESEND_API_KEY not set. Would have sent from {body.email}")
        return {"success": True}

    from_email = os.getenv("FROM_EMAIL", "noreply@alexeshaya.com")
    to_email = os.getenv("TO_EMAIL", "alexeshaya01@gmail.com")

    try:
        params: resend.Emails.SendParams = {
            "from": from_email,
            "to": [to_email],
            "reply_to": body.email,
            "subject": f"Portfolio contact from {body.name}",
            "text": f"Name: {body.name}\nEmail: {body.email}\n\n{body.message}",
            "html": f"""
                <p><strong>Name:</strong> {body.name}</p>
                <p><strong>Email:</strong> <a href="mailto:{body.email}">{body.email}</a></p>
                <hr />
                <p>{body.message.replace(chr(10), '<br>')}</p>
            """,
        }
        resend.Emails.send(params)
        return {"success": True}
    except Exception as exc:
        print(f"[contact] Resend error: {exc}")
        raise HTTPException(status_code=500, detail="Failed to send email")
