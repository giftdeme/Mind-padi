"""EHR records model."""

from datetime import datetime
from typing import Any, override
from uuid import UUID

from sqlalchemy import DateTime, ForeignKey, Index, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, BaseModelDict
from .users import User


class EhrRecordDict(BaseModelDict, total=True):
    """EHR record model serialized form."""
    user_id: str
    fhir_resource: dict[str, Any]
    synced_at: str


class EhrRecord(Base):
    """EHR record model."""

    __tablename__ = "ehr_records"

    __table_args__ = (
        Index("ix_ehr_records_user", "user_id"),
        Index("ix_ehr_records_synced", "synced_at"),
    )

    user_id: Mapped[UUID] = mapped_column(
        ForeignKey(User.id, ondelete="CASCADE"),
        nullable=False,
        comment="User ID",
    )
    fhir_resource: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        comment="FHIR resource data",
    )
    synced_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
        comment="Last sync timestamp",
    )

    @override
    def dict(self) -> EhrRecordDict:
        """Convert to dict."""
        base_dict = super().dict()
        return EhrRecordDict(
            id=base_dict["id"],
            user_id=self.user_id.hex,
            fhir_resource=self.fhir_resource,
            synced_at=self.synced_at.isoformat(),
            created_at=base_dict["created_at"],
            updated_at=base_dict["updated_at"],
        )
