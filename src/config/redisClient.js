//connect to redis and then export the client
const redis = require("redis");
let redisClient;
(async () => {
  redisClient = redis.createClient({
    url: "redis://redis-server:6379",
  });

  redisClient.on("error", (error) => console.error(`Error Redis: ${error}`));
  await redisClient.connect();
})();

module.exports = redisClient;
