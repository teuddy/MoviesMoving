const Joi = require("joi");

//function which take schema and the body or whatever

//just design func for body first

const validate = (req, res, next, schema) => {
  const result = schema.validate(req.body);
  if (result.error) {
    res.send(result.error.message);
  } else {
    next();
  }
};

module.exports = validate;
