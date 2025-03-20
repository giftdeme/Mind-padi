"""EHR records schema validation."""

from datetime import UTC, datetime
from typing import Any
from uuid import UUID

from pydantic import BaseModel, Field

from .base import BaseSchema


class EhrRecordCreate(BaseSchema):
    """Create an EHR record."""

    user_id: UUID
    fhir_resource: dict[str, Any] = Field(
        ...,
        description="FHIR resource data in JSON format",
    )
    synced_at: datetime = Field(default_factory=lambda: datetime.now(UTC))


class EhrRecordUpdate(BaseModel):
    """Update an EHR record."""

    fhir_resource: dict[str, Any] | None = Field(
        None,
        description="FHIR resource data in JSON format",
    )
    synced_at: datetime | None = Field(None)


class EhrRecordResponse(EhrRecordCreate):
    """EHR record response."""

    pass
