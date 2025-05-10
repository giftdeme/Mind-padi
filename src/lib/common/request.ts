import getEnv from "./env";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions<B> {
    /**
     * The HTTP method to use for the request. Defaults to "GET".
     */
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: B;
}

export interface Response {
    detail: string;
}

export async function RequestHandler<B, T = Response>(
    endpoint: string,
    options: RequestOptions<B> = {},
): Promise<T> {
    const { method = "GET", headers = {}, body } = options;
    const baseUrl = getEnv("API_BASE_URL");
    const url = new URL(
        `${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`,
        baseUrl,
    );
    const finalHeaders: HeadersInit = {
        ...headers,
        ...(body && !headers["Content-Type"]
            ? { "Content-Type": "application/json" }
            : {}),
    };

    try {
        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const errorData: Response = await response
                .json()
                .catch(() => ({ message: "unknown error" }));
            throw new Error(
                errorData.detail ||
                    `Request failed with status ${response.status}`,
            );
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType?.includes("application/json")) {
            return response.json() as Promise<T>;
        }
        return {} as T;
    } catch (err) {
        throw new Error(
            err instanceof Error ? err.message : "An unknown error occurred",
        );
    }
}
