const Joi = require('joi');

module.exports = {
  create: Joi.object().keys({
    lesson_id: Joi.number().required(),
    lesson_time_id: Joi.number().required(),
    day_id: Joi.number().required(),
    teacher_id: Joi.number().required(),
    semester: Joi.number().required(),
    denomirator: Joi.any(),
    group_id: Joi.number().required(),
    class_id: Joi.number().required(),
  }),
  update: Joi.object().keys({
    lesson_id: Joi.number(),
    lesson_time_id: Joi.number(),
    day_id: Joi.number(),
    teacher_id: Joi.number(),
    semester: Joi.number(),
    denomirator: Joi.number(),
    group_id: Joi.number(),
    class_id: Joi.number(),
  }),
  delete: Joi.object().keys({
    ids: Joi.array().items(Joi.number()).required()
  })
}
