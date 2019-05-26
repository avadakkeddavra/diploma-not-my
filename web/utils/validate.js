const joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    joi.validate(req.body, schema).then((data) => {
      next()
    }).catch((error) => {
      next(error);
    })
  }
}
module.exports = validate;
