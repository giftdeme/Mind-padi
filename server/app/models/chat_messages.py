"""Chat messages model."""

from typing import Any, override
from uuid import UUID

from sqlalchemy import Boolean, ForeignKey, Index, String, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .sessions import Session


class ChatMessageDict(BaseModelDict, total=True):
    """Chat message model serialized form."""
    session_id: str
    user_message: str
    ai_response: str
    intent: str | None
    escalation_triggered: bool
    citations: dict[str, Any] | None


class ChatMessage(Base):
    """Chat message model."""

    __tablename__ = "chat_messages"

    __table_args__ = (
        Index("ix_chat_messages_session", "session_id"),
        Index("ix_chat_messages_intent", "intent"),
    )

    session_id: Mapped[UUID] = mapped_column(
        ForeignKey(Session.id, ondelete="CASCADE"),
        nullable=False,
        comment="Session ID",
    )
    user_message: Mapped[str] = mapped_column(
        Text,
        nullable=False,
        comment="User message",
    )
    ai_response: Mapped[str] = mapped_column(
        Text,
        nullable=False,
        comment="AI response",
    )
    intent: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
        comment="Message intent",
    )
    escalation_triggered: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        server_default="false",
        comment="Whether escalation was triggered",
    )
    citations: Mapped[dict[str, Any] | None] = mapped_column(
        JSONB,
        nullable=True,
        comment="RAG sources",
    )

    @override
    def dict(self) -> ChatMessageDict:
        """Convert to dict."""
        base_dict = super().dict()
        return ChatMessageDict(
            id=base_dict["id"],
            session_id=self.session_id.hex,
            user_message=self.user_message,
            ai_response=self.ai_response,
            intent=self.intent,
            escalation_triggered=self.escalation_triggered,
            citations=self.citations,
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
