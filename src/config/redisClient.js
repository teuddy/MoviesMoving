// //connect to redis and then export the client
// const redis = require("redis");
// //dotenv
// require("dotenv").config();
// // let redisClient;
// // (async () => {
// //   // redisClient = redis.createClient({
// //   //   url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
// //   // });
// //   redisClient = redis.createClient();
// //   await redisClient.connect();
// //   redisClient.on("error", (error) => console.error(`Error Redis: ${error}`));
// // })();

// const client = redis.createClient(port, host);

// client.on("connect", function () {
//   console.log("Connected!");
// });

// module.exports = redisClient;

// //no me funciono con urk
// //utilizare el socket a ver que sucede

// //asunciones hasta ahota OJO

// //mi redis si esta en el localhsot en 6379.

// // pero la conectarse me da settimeout

// // ya pude conectarme localmente, la pregutna es como poder conectarme mediante el local host :D
