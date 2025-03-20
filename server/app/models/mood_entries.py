"""Mood entries model."""

from typing import override
from uuid import UUID

from sqlalchemy import CheckConstraint, Float, ForeignKey, Index, Integer, Text
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .users import User


class MoodEntryDict(BaseModelDict, total=True):
    """Mood entry model serialized form."""
    user_id: str
    rating: int
    notes: str | None
    sentiment_score: float | None


class MoodEntry(Base):
    """Mood entry model."""

    __tablename__ = "mood_entries"

    __table_args__ = (
        CheckConstraint("rating BETWEEN 1 AND 10", name="valid_rating"),
        Index("ix_mood_entries_user", "user_id"),
        Index("ix_mood_entries_rating", "rating"),
    )

    user_id: Mapped[UUID] = mapped_column(
        ForeignKey(User.id, ondelete="CASCADE"),
        nullable=False,
        comment="User ID",
    )
    rating: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        comment="Mood rating 1-10",
    )
    notes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
        comment="User notes",
    )
    sentiment_score: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
        comment="Sentiment analysis score",
    )

    @override
    def dict(self) -> MoodEntryDict:
        """Convert to dict."""
        base_dict = super().dict()
        return MoodEntryDict(
            id=base_dict["id"],
            user_id=self.user_id.hex,
            rating=self.rating,
            notes=self.notes,
            sentiment_score=self.sentiment_score,
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
