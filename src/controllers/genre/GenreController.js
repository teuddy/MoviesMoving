const Genre = require("../../models/index").genres;
const saveRecord = require("../saveRecord");
const getRecords = require("../getRecords");
const redisController = require("../redis/redisController");

exports.createGenre = async (req, res) => {
  await redisController.deleteDataFromRedis("genres");
  saveRecord(Genre, req.body, res);
};

exports.findAllGenres = async (req, res) => {
  const cacheData = await redisController.getDataFromRedis("genres");
  if (!cacheData) {
    const dbData = await getRecords(
      Genre,
      {
        order: [["id", "ASC"]],
      },
      res
    );
    await redisController.setDataToRedis("genres", dbData);
    res.send(dbData);
  } else {
    res.send(cacheData);
  }
};
