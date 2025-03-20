"""Escalations model."""

from datetime import datetime
from enum import StrEnum
from typing import override
from uuid import UUID

from sqlalchemy import DateTime, Enum, ForeignKey, Index, String
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .sessions import Session
from .users import User


class EscalationStatus(StrEnum):
    """Escalation status types."""
    PENDING = "pending"
    RESOLVED = "resolved"


class EscalationDict(BaseModelDict, total=True):
    """Escalation model serialized form."""
    user_id: str
    session_id: str
    status: str
    ticket_id: str | None
    resolved_at: str | None


class Escalation(Base):
    """Escalation model."""

    __tablename__ = "escalations"

    __table_args__ = (
        Index("ix_escalations_user", "user_id"),
        Index("ix_escalations_session", "session_id"),
        Index("ix_escalations_status", "status"),
    )

    user_id: Mapped[UUID] = mapped_column(
        ForeignKey(User.id, ondelete="CASCADE"),
        nullable=False,
        comment="User ID",
    )
    session_id: Mapped[UUID] = mapped_column(
        ForeignKey(Session.id, ondelete="CASCADE"),
        nullable=False,
        comment="Session ID",
    )
    status: Mapped[EscalationStatus] = mapped_column(
        Enum(EscalationStatus),
        nullable=False,
        comment="Escalation status",
    )
    ticket_id: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
        comment="Support ticket ID",
    )
    resolved_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
        comment="Resolution timestamp",
    )

    @override
    def dict(self) -> EscalationDict:
        """Convert to dict."""
        base_dict = super().dict()
        return EscalationDict(
            id=base_dict["id"],
            user_id=self.user_id.hex,
            session_id=self.session_id.hex,
            status=self.status.value,
            ticket_id=self.ticket_id,
            resolved_at=self.resolved_at.isoformat() if self.resolved_at else None,
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
