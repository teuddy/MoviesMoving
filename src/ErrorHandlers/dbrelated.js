const db = require("./../models/index.js");

const catchSequelizeDbError = (error, response) => {
  response.status(400).send({
    message: "Some error occurred while executing db operations.",
  });
};

module.exports = catchSequelizeDbError;
