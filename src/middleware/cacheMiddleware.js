const redisClient = require("../config/redisClient.js");

//if you find data with this key inside redis, then return that if not then just next
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl.split("/")[2];
  redisClient.get(key, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

module.exports = cacheMiddleware;
