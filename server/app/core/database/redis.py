"""Redis utilities."""

import sys

from redis.asyncio import from_url
from redis.exceptions import AuthenticationError, TimeoutError

from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

redis = from_url( # type: ignore[no-untyped-call]
    url=settings.REDIS_URI.unicode_string(),
    encoding="utf-8",
    decode_responses=True,
    max_connections=10,
    socket_timeout=30,
    socket_keepalive=True,
    health_check_interval=30,
    retry_on_timeout=True,
)

async def open_redis() -> None:
    """Open the Redis client."""
    try:
        await redis.ping()
    except TimeoutError as e:
        logger.error("Redis connection timeout", exc_info=e)
        sys.exit()
    except AuthenticationError as e:
        logger.error("Redis authentication error", exc_info=e)
        sys.exit()
    except Exception as e:
        logger.error("Redis connection error", exc_info=e)
        sys.exit()

async def close_redis() -> None:
    """Close the Redis client."""
    await redis.close()
