"""Request logging middleware."""

import time
from collections.abc import Awaitable, Callable

from fastapi import FastAPI, Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response

from ..core.logging import get_logger

logger = get_logger(__name__)


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    """Log all requests and responses."""

    def __init__(self, app: FastAPI) -> None:
        """Initialize middleware.

        Args:
            app: FastAPI application instance
        """
        super().__init__(app)

    async def dispatch(
        self, request: Request, call_next: Callable[[Request], Awaitable[Response]]
    ) -> Response:
        """Process request/response and log details.

        Args:
            request: Incoming request
            call_next: Next middleware/route handler

        Returns:
            Response from next handler
        """
        start_time = time.time()

        logger.info(
            "Request started",
            extra={
                "method": request.method,
                "url": str(request.url),
                "client": request.client.host if request.client else None,
            },
        )

        response = await call_next(request)

        duration = time.time() - start_time

        logger.info(
            "Request completed",
            extra={
                "method": request.method,
                "url": request.url.path,
                "status_code": response.status_code,
                "duration": f"{duration:.2f}s",
            },
        )

        return response
