const catchSequelizeDbError = require("../ErrorHandlers/dbrelated");

//get list of records
const getRecords = async (model, options, response) => {
  return model
    .findAll({
      ...options,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      catchSequelizeDbError(err, response);
    });
};

module.exports = getRecords;
