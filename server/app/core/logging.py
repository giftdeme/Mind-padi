"""Application logging configuration."""

import logging
import sys
from typing import Any

from pydantic import BaseModel

from .config import Environment, LogLevel, settings


class LogConfig(BaseModel):
    """Logging configuration."""

    LOGGER_NAME: str = "mindpadi"
    LOG_FORMAT: str = "%(levelprefix)s | %(asctime)s | %(message)s"
    LOG_LEVEL: LogLevel = LogLevel.DEBUG

    version: int = 1
    disable_existing_loggers: bool = False
    formatters: dict[str, dict[str, str]] = {
        "default": {
            "format": LOG_FORMAT,
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    }
    handlers: dict[str, dict[str, Any]] = {
        "default": {
            "formatter": "default",
            "class": "logging.StreamHandler",
            "stream": sys.stdout,
        },
    }
    loggers: dict[str, dict[str, Any]] = {
        LOGGER_NAME: {
            "handlers": ["default"],
            "level": LOG_LEVEL,
            "propagate": False,
        },
    }


def get_logger(name: str) -> logging.Logger:
    """Get logger instance.

    Args:
        name: Logger name, typically __name__ of the module

    Returns:
        Logger instance with proper configuration
    """
    logger = logging.getLogger(f"{LogConfig.LOGGER_NAME}.{name}")

    if settings.ENVIRONMENT == Environment.PRODUCTION:
        logger.setLevel(LogLevel.INFO)

    return logger
