const Joi = require('joi');

module.exports = {
  create: Joi.object().keys({
    name: Joi.string().required()
  }),
  update: Joi.object().keys({
    name: Joi.string()
  })
}
