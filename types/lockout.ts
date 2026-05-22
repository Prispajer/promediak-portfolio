export interface UserRateLimit {
  attempts: number;
  firstAttemptAt: number;
  blockedUntil: number;
}

export interface RateLimitResult {
  allowed: boolean;
  message?: string;
}
