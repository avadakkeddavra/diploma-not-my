const Joi = require('joi');

module.exports = {
  create: Joi.object().keys({
    name: Joi.string().required(),
    cafedra_id: Joi.number().required(),
    position: Joi.string().required()
  }),
  update: Joi.object().keys({
    name: Joi.string(),
    cafedra_id: Joi.number(),
    position: Joi.string()
  }),
  delete: Joi.object().keys({
    ids: Joi.array().items(Joi.number()).required()
  })
}
