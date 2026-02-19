import Joi from 'joi';

export const loginStudentSchema = Joi.object({
  email: Joi.string().email().min(2).max(50).required(),
  password: Joi.string().min(2).max(80).required(),
});
