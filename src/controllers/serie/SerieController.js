const saveRecord = require("../saveRecord");
const getRecords = require("../getRecords");

const Serie = require("../../models/index").series;

const Episode = require("../../models/index").episodes;
const redisController = require("../redis/RedisController.js");

exports.createSerie = async (req, res) => {
  await redisController.deleteDataFromRedis("series");
  saveRecord(Serie, req.body, res);
};

exports.getAllSeries = async (req, res) => {
  const cacheData = await redisController.getDataFromRedis("series");
  if (!cacheData) {
    const dbData = await getRecords(
      Serie,
      {
        order: [["id", "ASC"]],
        attributes: ["id", "title", "description", "coverImage", "year"],
        include: "genre",
      },
      res
    );
    await redisController.setDataToRedis("series", dbData);
    res.send(dbData);
  } else {
    res.send(cacheData);
  }
};

exports.getSerie = async (req, res) => {
  const id = req.params.id;
  const data = await Episode.findAll({
    where: { seriesId: id },
  });
  const seasons = [];
  let season = null;
  let episodes = [];

  data.forEach((episode) => {
    if (season === null || episode.seasonNumber === season) {
      episodes.push(episode);
      season = episode.seasonNumber;
    } else {
      seasons.push({ season: season, episodes: episodes });
      episodes = [episode];
      season = episode.seasonNumber;
    }
  });

  if (episodes.length > 0) {
    seasons.push({ season: season, episodes: episodes });
  }
  res.send(seasons);
};
