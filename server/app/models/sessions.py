"""Session model."""

from datetime import UTC, datetime
from typing import override
from uuid import UUID

from sqlalchemy import DateTime, ForeignKey, Index, Text
from sqlalchemy.dialects.postgresql import INET
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .users import User


class SessionDict(BaseModelDict, total=True):
    """Session model serialized form."""
    user_id: str
    refresh_token: str
    expires_at: str
    device_info: str | None
    ip_address: str | None


class Session(Base):
    """Session model."""

    __tablename__ = "sessions"

    __table_args__ = (
        Index("ix_sessions_user", "user_id"),
        Index("ix_sessions_expires", "expires_at"),
    )

    user_id: Mapped[UUID] = mapped_column(
        ForeignKey(User.id, ondelete="CASCADE"),
        nullable=False,
        comment="User ID",
    )
    refresh_token: Mapped[str] = mapped_column(
        Text,
        nullable=False,
        comment="Refresh token",
    )
    expires_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        index=True,
        comment="Token expiry time",
    )
    device_info: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
        comment="Device information",
    )
    ip_address: Mapped[str | None] = mapped_column(
        INET,
        nullable=True,
        comment="IP address",
    )

    @override
    def dict(self) -> SessionDict:
        """Convert to dict."""
        base_dict = super().dict()
        return SessionDict(
            id=base_dict["id"],
            user_id=self.user_id.hex,
            refresh_token=self.refresh_token,
            expires_at=self.expires_at.astimezone(UTC).isoformat(),
            device_info=self.device_info,
            ip_address=str(self.ip_address) if self.ip_address else None,
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
