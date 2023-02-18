//set up redis client
const redis = require("redis");

//connect to redis and then export the client

const client = redis.createClient({});

client.on("error", (err) => console.error("Redis Client Error", err));

module.exports = client;
