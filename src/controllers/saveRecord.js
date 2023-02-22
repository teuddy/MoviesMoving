const catchSequelizeDbError = require("../ErrorHandlers/dbrelated");

//save record, send data to client
const saveRecord = async (model, entity, response) => {
  model
    .create({ ...entity })
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      console.log(err.message);
      catchSequelizeDbError(err, response);
    });
};

module.exports = saveRecord;
