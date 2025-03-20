"""Chat messages schema validation."""

from typing import Any
from uuid import UUID

from pydantic import BaseModel, Field, field_validator

from .base import BaseSchema


class ChatMessageBase(BaseModel):
    """Common chat message fields."""

    @field_validator("intent")
    @classmethod
    def normalize_intent(cls, v: str | None) -> str | None:
        """Normalize intent to lowercase."""
        return v.lower() if v else None


class ChatMessageCreate(BaseSchema, ChatMessageBase):
    """Create a chat message."""

    session_id: UUID
    user_message: str = Field(..., min_length=1)
    ai_response: str = Field(..., min_length=1)
    intent: str | None = Field(None, max_length=50)
    escalation_triggered: bool = Field(default=False)
    citations: dict[str, Any] | None = None


class ChatMessageUpdate(ChatMessageBase):
    """Update a chat message."""

    intent: str | None = Field(None, max_length=50)
    escalation_triggered: bool | None = None
    citations: dict[str, Any] | None = None


class ChatMessageResponse(ChatMessageCreate):
    """Chat message response."""

    pass
