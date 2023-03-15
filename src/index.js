const express = require("express");
const route = require("./routers/index.js");
const { router, adminBro } = require("./config/.adminbro/config.js");
const signale = require("signale");
const Redis = require("ioredis");
// const redisClient = require("./config/redisClient.js");
//dotenv
require("dotenv").config();

const app = express();

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

//realmente mi docker container usando redis hace su trabajo

//es mi servidor de nodejs el problema

//use json body parser
app.use(express.json());

//admin router
app.use(adminBro.options.rootPath, router);

//helath checks
app.get("/health", (req, res) => {
  res.send(`OK, ${process.env.REDIS_HOST}`);
});

app.get("/redisset", (req, res) => {
  redis.set("mykey", "value");
  res.send("ok");
});

app.get("/redisget", (req, res) => {
  let x = redis.get("mykey", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result); // Prints "value"
    }
  });
});

//main router
app.use("/v1", route);

//create a server form app
const server = app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// Handle server shutdown for SIGNIN signal
process.on("SIGINT", () => {
  signale.info("Received SIGNIN, shutting down server...");
  server.close(() => {
    signale.success("Express server closed");
    //if redisclient not closed
    if (redisClient) {
      redisClient.quit();
      signale.success("Redis client closed");
    }
    process.exit(0);
  });
});

module.exports = server;
