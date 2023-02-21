const redisClient = require("../config/redisClient.js");

const getDataFromRedis = async (key) => {
  try {
    const data = await redisClient.get(key);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteDataFromRedis = async (key) => {
  try {
    const data = await redisClient.del(key);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const setDataToRedis = async (key, value) => {
  try {
    redisClient.set(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDataFromRedis,
  deleteDataFromRedis,
  setDataToRedis,
};
