import { redisClient } from "@/lib/redis/redisClient";
import { createMailTransporter } from "@/lib/mail/mailTransporter";
import IMailService from "@/lib/mail/IMailService";
import IRedisCache from "@/lib/redis/IRedisCache";
import MailService from "@/lib/mail/MailService";
import RedisCache from "@/lib/redis/RedisCache";
import RateLimiter from "@/lib/redis/RateLimiter";

const mailTransporter = createMailTransporter();
export const mailService: IMailService = new MailService(mailTransporter);
export const redisCache: IRedisCache = new RedisCache(redisClient);
export const rateLimiter = new RateLimiter(redisCache);
