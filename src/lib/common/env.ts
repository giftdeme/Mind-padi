const requiredEnvVars = {
    API_BASE_URL: null,
    NODE_ENV: "development",
} as const;

type EnvKey = keyof typeof requiredEnvVars;

const envCache = new Map<string, string>();

export default function getEnv<K extends EnvKey>(
    key: K,
    defaultValue: string | null = requiredEnvVars[key],
): string {
    if (envCache.has(key)) {
        const cache = envCache.get(key);
        if (cache !== undefined) return cache;
    }

    const value = process.env[key] ?? defaultValue;

    if (value === null || value === undefined) {
        throw new Error(`Environment variable ${key} is not set`);
    }

    if (value.trim() === "") {
        throw new Error(`Environment variable ${key} is empty`);
    }

    envCache.set(key, value);
    return value;
}
