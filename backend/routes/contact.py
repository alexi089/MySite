from fastapi import APIRouter

router = APIRouter()


@router.post("/contact")
async def contact() -> dict:
    return {"success": True}
