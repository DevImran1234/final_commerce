import Redis from "ioredis";

const redis = new Redis({
  host: "valkey-9e933c-imranzynexsolutions-ab57.h.aivencloud.com",
  port: 14732,
  password: "AVNS_QGWSB4U6cPOiZOxWZdU",
  tls: {},
  maxRetriesPerRequest: null, 
  retryStrategy: (times) => Math.min(times * 50, 2000),
  reconnectOnError: (err) => {
    console.error("Redis reconnecting due to error:", err);
    return true; 
  },
  enableAutoPipelining: true, 
  connectTimeout: 10000,
});

redis.on("connect", () => {
  console.log("Connected to Redis successfully");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

export { redis };
