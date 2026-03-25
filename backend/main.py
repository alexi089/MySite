from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.contact import router as contact_router

app = FastAPI(title="Alex Eshaya — Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://alexeshaya.com",       # production domain (update when confirmed)
        "http://localhost:3000",         # local dev
    ],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

app.include_router(contact_router, prefix="/api")


@app.get("/")
def health() -> dict:
    return {"status": "ok"}
