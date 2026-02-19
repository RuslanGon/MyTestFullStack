import Joi from 'joi';

export const registerStudentSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().min(2).max(50).required(),
  password: Joi.string().min(2).max(80).required(),
});
