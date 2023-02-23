const express = require("express");
const route = require("./routers/index.js");
const { router, adminBro } = require("./config/.adminbro/config.js");
const signale = require("signale");
const redisClient = require("./config/redisClient.js");

const app = express();

//use json body parser
app.use(express.json());

//admin router
app.use(adminBro.options.rootPath, router);

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
