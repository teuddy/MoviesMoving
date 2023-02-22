const catchSequelizeDbError = require("../ErrorHandlers/dbrelated");

//delete record
const deleteRecord = async (model, id, response) => {
  return model
    .destroy({
      where: { id },
    })
    .then((data) => {
      if (data == 1) {
        return data;
      } else {
        return null;
      }
    })
    .catch((err) => {
      catchSequelizeDbError(err, response);
    });
};

module.exports = deleteRecord;
