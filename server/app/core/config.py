from enum import StrEnum
from functools import lru_cache

from pydantic import PositiveInt, PostgresDsn, RedisDsn, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Environment(StrEnum):
    """Application environment."""
    DEVELOPMENT = "development"
    PRODUCTION = "production"


class LogLevel(StrEnum):
    """Available log levels."""
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
        validate_default=True,
        env_ignore_empty=True,
    )

    # DATABASE SETTINGS
    DATABASE_URI: PostgresDsn

    # REDIS SETTINGS
    REDIS_URI: RedisDsn

    # SERVER SETTINGS
    SERVER_HOST: str = "0.0.0.0"
    SERVER_PORT: PositiveInt = 8000

    # ENVIRONMENT SETTINGS
    ENVIRONMENT: Environment = Environment.DEVELOPMENT

    # LOGGING SETTINGS
    LOG_LEVEL: LogLevel = LogLevel.INFO
    LOG_FORMAT: str = "%(levelprefix)s | %(asctime)s | %(message)s"

    @field_validator("ENVIRONMENT", mode="before")
    @classmethod
    def normalize_environment(cls, v: str) -> str:
        """Normalize environment to lowercase."""
        return v.lower() if isinstance(v, str) else v

    @field_validator("LOG_LEVEL", mode="before")
    @classmethod
    def normalize_log_level(cls, v: str) -> str:
        """Normalize log level to uppercase."""
        return v.upper() if isinstance(v, str) else v


@lru_cache
def get_settings() -> Settings:
    return Settings()  # type: ignore[call-arg]


settings = get_settings()
