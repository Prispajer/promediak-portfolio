import { RateLimitResult } from "@/types/lockout";

export default interface IRateLimiter {
  check(ip: string): Promise<RateLimitResult>;
}
