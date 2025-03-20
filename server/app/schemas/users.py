"""User schema validation."""

from datetime import datetime
from enum import StrEnum
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator

from .base import BaseSchema


class UserRole(StrEnum):
    """Available user roles."""
    USER = "user"
    ADMIN = "admin"
    THERAPIST = "therapist"


class UserBase(BaseModel):
    """Common user fields."""

    @field_validator("oauth_provider")
    @classmethod
    def normalize_oauth_provider(cls, v: str | None) -> str | None:
        """Normalize to lowercase."""
        return v.lower() if v else None

    @field_validator("oauth_id")
    @classmethod
    def normalize_oauth_id(cls, v: str | None) -> str | None:
        """Normalize to lowercase."""
        return v.lower() if v else None

    @field_validator("email")
    @classmethod
    def normalize_email(cls, v: str | None) -> str | None:
        """Normalize to lowercase."""
        return v.lower() if v else None


class UserCreate(UserBase):
    """Create a user."""

    email: EmailStr = Field(..., description="Email address")
    password: str | None = Field(
        None,
        min_length=8,
        max_length=72,
        description="Password (8-72 chars) or OAuth",
    )
    role: UserRole = Field(default=UserRole.USER)
    oauth_provider: str | None = Field(None, max_length=20)
    oauth_id: str | None = Field(None, max_length=255)
    is_active: bool = Field(default=True)

    @model_validator(mode='after')
    def validate_auth_method(self) -> 'UserCreate':
        """Validate authentication method."""
        # Assert at least one auth method is provided
        assert self.password or (self.oauth_provider and self.oauth_id), \
            "Either password or OAuth credentials (provider and ID) must be provided"

        # Assert OAuth credentials are complete when provided
        assert not (self.oauth_provider and not self.oauth_id), \
            "OAuth ID is required when OAuth provider is specified"
        assert not (self.oauth_id and not self.oauth_provider), \
            "OAuth provider is required when OAuth ID is specified"

        return self


class UserUpdate(UserBase):
    """Update a user."""

    email: EmailStr | None = Field(None, description="Email address")
    password: str | None = Field(
        None,
        min_length=8,
        max_length=72,
        description="Password (8-72 chars) or OAuth",
    )
    role: UserRole | None = None
    oauth_provider: str | None = Field(None, max_length=20)
    oauth_id: str | None = Field(None, max_length=255)
    is_active: bool | None = None
    last_login: datetime | None = None

    @model_validator(mode='after')
    def validate_oauth_fields(self) -> 'UserUpdate':
        """Validate OAuth fields."""
        # Assert OAuth credentials are complete when provided
        assert not (self.oauth_provider and not self.oauth_id), \
            "OAuth ID is required when OAuth provider is specified"
        assert not (self.oauth_id and not self.oauth_provider), \
            "OAuth provider is required when OAuth ID is specified"

        return self


class UserResponse(BaseSchema, UserBase):
    """User response."""

    anonymized_id: UUID
    email: EmailStr
    role: UserRole
    oauth_provider: str | None
    oauth_id: str | None
    last_login: datetime | None
    is_active: bool
