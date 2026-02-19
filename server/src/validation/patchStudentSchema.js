import Joi from 'joi';

export const patchStudentSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  age: Joi.number().integer().min(1).max(80),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(0).max(12),
  onDuty: Joi.boolean().default(false),
});
