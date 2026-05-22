import IRedisCache from "@/lib/redis/IRedisCache";
import { RateLimitResult, UserRateLimit } from "@/types/lockout";
import IRateLimiter from "@/lib/redis/IRateLimiter";

export default class RateLimiter implements IRateLimiter {
  private readonly cache: IRedisCache;
  private readonly durationMs: number;
  private readonly maxAttempts: number;

  constructor(cache: IRedisCache) {
    this.cache = cache;
    this.durationMs = Number(process.env.RATE_LIMIT_DURATION) || 900000;
    this.maxAttempts = Number(process.env.RATE_LIMIT_MAX_ATTEMPTS) || 5;
  }

  async check(ip: string): Promise<RateLimitResult> {
    const key = `ratelimit:${ip}`;
    const now = Date.now();
    const ttlInSeconds = Math.ceil(this.durationMs / 1000);
    const shortTtl = 300;

    const cache = await this.cache.get<UserRateLimit>(key);

    if (!cache) {
      const memoryCache: UserRateLimit = {
        attempts: 1,
        firstAttemptAt: now,
        blockedUntil: 0,
      };
      await this.cache.set(key, memoryCache, shortTtl);
      return { allowed: true };
    }

    if (cache.blockedUntil > now) {
      const remainingMs = cache.blockedUntil - now;
      const remainingSeconds = Math.ceil(remainingMs / 1000);

      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;

      const formattedTime =
        minutes > 0 ? `${minutes} min ${seconds} s` : `${seconds} s`;

      return {
        allowed: false,
        message: `Jesteś zablokowany jeszcze przez ${formattedTime}.`,
      };
    }

    if (now - cache.firstAttemptAt > this.durationMs) {
      cache.attempts = 1;
      cache.firstAttemptAt = now;
      cache.blockedUntil = 0;
    } else {
      cache.attempts++;
    }

    if (cache.attempts > this.maxAttempts) {
      cache.blockedUntil = now + this.durationMs;

      await this.cache.set(key, cache, ttlInSeconds);

      return {
        allowed: false,
        message: "Przekroczono limit prób. Blokada 15 minut.",
      };
    }

    await this.cache.set(key, cache, shortTtl);
    return { allowed: true };
  }
}
