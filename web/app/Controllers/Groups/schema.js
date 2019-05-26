const Joi = require('joi');

module.exports = {
  create: Joi.object().keys({
    name: Joi.string().required(),
    cafedra_id: Joi.number().required()
  }),
  update: Joi.object().keys({
    name: Joi.string(),
    cafedra_id: Joi.number()
  }),
  delete: Joi.object().keys({
    ids: Joi.array().items(Joi.number()).required()
  })
}
