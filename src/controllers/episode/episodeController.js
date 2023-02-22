const getRecords = require("../getRecords");
const saveRecord = require("../saveRecord");
const Episode = require("../../models/index").episodes;

const redisController = require("../redis/redisController");

exports.episodeCreate = async (req, res, next) => {
  await redisController.deleteDataFromRedis("episodes");
  saveRecord(Episode, req.body, res);
};

exports.getEpisodes = async (req, res) => {
  const cacheData = await redisController.getDataFromRedis("episodes");
  if (!cacheData) {
    const dbData = await getRecords(Episode, res);
    await redisController.setDataToRedis("episodes", dbData);
    res.send(dbData);
  } else {
    res.send(cacheData);
  }
};
