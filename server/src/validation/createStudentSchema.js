import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  age: Joi.number().integer().min(1).max(80).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(0).max(12).required(),
  onDuty: Joi.boolean().default(false),
});
