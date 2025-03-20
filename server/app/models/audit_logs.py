"""Audit logs model."""

from datetime import datetime
from typing import override
from uuid import UUID

from sqlalchemy import DateTime, ForeignKey, Index, String, Text, func
from sqlalchemy.dialects.postgresql import INET
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .users import User


class AuditLogDict(BaseModelDict, total=True):
    """Audit log model serialized form."""
    user_id: str | None
    action: str
    endpoint: str | None
    ip_address: str | None
    user_agent: str | None
    timestamp: str


class AuditLog(Base):
    """Audit log model."""

    __tablename__ = "audit_logs"

    __table_args__ = (
        Index("ix_audit_logs_user", "user_id"),
        Index("ix_audit_logs_action", "action"),
        Index("ix_audit_logs_timestamp", "timestamp"),
    )

    user_id: Mapped[UUID | None] = mapped_column(
        ForeignKey(User.id, ondelete="SET NULL"),
        nullable=True,
        comment="User ID",
    )
    action: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        comment="Action performed",
    )
    endpoint: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
        comment="API endpoint",
    )
    ip_address: Mapped[str | None] = mapped_column(
        INET,
        nullable=True,
        comment="IP address",
    )
    user_agent: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
        comment="User agent string",
    )
    timestamp: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
        comment="Event timestamp",
    )

    @override
    def dict(self) -> AuditLogDict:
        """Convert to dict."""
        base_dict = super().dict()
        return AuditLogDict(
            id=base_dict["id"],
            user_id=self.user_id.hex if self.user_id else None,
            action=self.action,
            endpoint=self.endpoint,
            ip_address=str(self.ip_address) if self.ip_address else None,
            user_agent=self.user_agent,
            timestamp=self.timestamp.isoformat(),
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
