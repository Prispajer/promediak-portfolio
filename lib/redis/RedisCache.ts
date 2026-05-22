import IRedisCache from "@/lib/redis/IRedisCache";
import { Redis } from "@upstash/redis";

export default class RedisCache implements IRedisCache {
  private readonly client: Redis;

  constructor(client: Redis) {
    this.client = client;
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.get<T>(key);

    if (value === null) return null;

    return value;
  }

  async set<T>(key: string, value: T, ttlSeconds: number = 900): Promise<void> {
    await this.client.set(key, value, {
      ex: ttlSeconds,
    });
  }
}
