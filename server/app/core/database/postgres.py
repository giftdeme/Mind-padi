"""Async PostgreSQL database configuration and session management."""

import sys
from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.core.config import Environment, settings
from app.core.logging import get_logger
from app.models import Base

logger = get_logger(__name__)

engine: AsyncEngine = create_async_engine(
    settings.DATABASE_URI.unicode_string(),
    echo=settings.ENVIRONMENT == Environment.DEVELOPMENT,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
    pool_timeout=30,
    pool_recycle=3600,
    pool_use_lifo=False,
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
)


async def get_db() -> AsyncGenerator[AsyncSession]:
    """Get database session for dependency injection."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception as e:
            logger.error("Database error", exc_info=e)
            await session.rollback()
            sys.exit()
        finally:
            await session.close()

async def create_tables() -> None:
    """Create all tables in the database."""
    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)

async def drop_tables() -> None:
    """Drop all tables in the database."""
    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.drop_all)
