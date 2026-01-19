export function getEnv(key: string): string {
  const isDev = process.env.NODE_ENV === 'development';
  // In development, prioritize NEXT_PUBLIC_ prefixed variables
  if (isDev) {
    return process.env[`NEXT_PUBLIC_${key}`] || process.env[key] || "";
  }
  // In production, prioritize the key itself (assuming standard storage)
  return process.env[key] || process.env[`NEXT_PUBLIC_${key}`] || "";
}
