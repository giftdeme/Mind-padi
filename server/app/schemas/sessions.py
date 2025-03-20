"""Sessions schema validation."""

from datetime import UTC, datetime
from uuid import UUID

from pydantic import BaseModel, Field, IPvAnyAddress

from .base import BaseSchema


class SessionBase(BaseModel):
    """Common session fields."""

    pass


class SessionCreate(BaseSchema, SessionBase):
    """Create a session."""

    user_id: UUID
    refresh_token: str = Field(..., min_length=1)
    expires_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    device_info: str | None = None
    ip_address: IPvAnyAddress | None = None


class SessionUpdate(SessionBase):
    """Update a session."""

    refresh_token: str | None = Field(None, min_length=1)
    expires_at: datetime | None = None
    device_info: str | None = None
    ip_address: IPvAnyAddress | None = None


class SessionResponse(SessionCreate):
    """Session response."""

    pass
