"""Mood entries schema validation."""

from uuid import UUID

from pydantic import BaseModel, Field

from .base import BaseSchema


class MoodEntryCreate(BaseSchema):
    """Create a mood entry."""

    user_id: UUID
    rating: int = Field(..., ge=1, le=10)
    notes: str | None = None
    sentiment_score: float | None = Field(
        None,
        description="Sentiment analysis score between -1 and 1",
        ge=-1.0,
        le=1.0,
    )


class MoodEntryUpdate(BaseModel):
    """Update a mood entry."""

    rating: int | None = Field(None, ge=1, le=10)
    notes: str | None = None
    sentiment_score: float | None = Field(
        None,
        description="Sentiment analysis score between -1 and 1",
        ge=-1.0,
        le=1.0,
    )


class MoodEntryResponse(MoodEntryCreate):
    """Mood entry response."""

    pass
