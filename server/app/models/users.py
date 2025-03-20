"""User model."""

from datetime import datetime
from enum import StrEnum
from typing import override
from uuid import UUID, uuid4

from sqlalchemy import Boolean, DateTime, Enum, Index, String
from sqlalchemy.dialects.postgresql import UUID as PgUUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import expression

from .base import Base, BaseModelDict


class UserRole(StrEnum):
    """User role types."""
    USER = "user"
    ADMIN = "admin"
    THERAPIST = "therapist"


class UserDict(BaseModelDict, total=True):
    """User model serialized form."""
    anonymized_id: str
    email: str
    role: str
    oauth_provider: str | None
    oauth_id: str | None
    last_login: str | None
    is_active: bool


class User(Base):
    """User model."""

    __tablename__ = "users"

    __table_args__ = (
        Index("ix_users_role", "role"),
        Index("ix_users_email", "email", unique=True),
        Index("ix_users_oauth", "oauth_provider", "oauth_id"),
        Index("ix_users_active_role", "is_active", "role"),
    )

    anonymized_id: Mapped[UUID] = mapped_column(
        PgUUID,
        default=uuid4,
        unique=True,
        nullable=False,
        comment="HIPAA compliant anonymized ID",
        index=True,
    )
    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        comment="User email address",
    )
    password_hash: Mapped[str | None] = mapped_column(
        String(72),
        nullable=True,
        comment="Bcrypt password hash",
    )
    role: Mapped[UserRole] = mapped_column(
        Enum(UserRole),
        nullable=False,
        comment="User role",
    )
    oauth_provider: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
        comment="OAuth provider name",
    )
    oauth_id: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
        comment="OAuth provider user ID",
    )
    last_login: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
        comment="Last login timestamp",
        index=True,
    )
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        server_default=expression.true(),
        comment="Whether user is active",
    )

    @override
    def dict(self) -> UserDict:
        """Convert to dict."""
        base_dict = super().dict()
        return UserDict(
            id=base_dict["id"],
            anonymized_id=self.anonymized_id.hex,
            email=self.email,
            role=self.role.value,
            oauth_provider=self.oauth_provider,
            oauth_id=self.oauth_id,
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
            last_login=self.last_login.isoformat() if self.last_login else None,
            is_active=self.is_active,
        )
