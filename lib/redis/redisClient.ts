import { Redis } from "@upstash/redis";

export const redisClient = new Redis({
  url: process.env.REDIS_HOST,
  token: process.env.REDIS_TOKEN,
});
