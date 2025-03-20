"""Escalations schema validation."""

from datetime import datetime
from enum import StrEnum
from uuid import UUID

from pydantic import BaseModel, Field

from .base import BaseSchema


class EscalationStatus(StrEnum):
    """Escalation status types."""
    PENDING = "pending"
    RESOLVED = "resolved"


class EscalationCreate(BaseSchema):
    """Create an escalation."""

    user_id: UUID
    session_id: UUID
    status: EscalationStatus = Field(default=EscalationStatus.PENDING)
    ticket_id: str | None = Field(None, max_length=50)
    resolved_at: datetime | None = None


class EscalationUpdate(BaseModel):
    """Update an escalation."""

    status: EscalationStatus | None = None
    ticket_id: str | None = Field(None, max_length=50)
    resolved_at: datetime | None = Field(
        None,
        description="Resolution timestamp in UTC",
    )


class EscalationResponse(EscalationCreate):
    """Escalation response."""

    pass
