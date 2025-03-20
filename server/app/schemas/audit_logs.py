"""Audit logs schema validation."""

from datetime import UTC, datetime
from uuid import UUID

from pydantic import BaseModel, Field, IPvAnyAddress

from .base import BaseSchema


class AuditLogCreate(BaseSchema):
    """Create an audit log."""

    user_id: UUID | None = None
    action: str = Field(..., max_length=50)
    endpoint: str | None = Field(None, max_length=255)
    ip_address: IPvAnyAddress | None = None
    user_agent: str | None = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(UTC))


class AuditLogUpdate(BaseModel):
    """Update an audit log."""

    action: str | None = Field(None, max_length=50)
    endpoint: str | None = Field(None, max_length=255)
    ip_address: IPvAnyAddress | None = None
    user_agent: str | None = None


class AuditLogResponse(AuditLogCreate):
    """Audit log response."""

    pass
