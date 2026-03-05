import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  number: Joi.string().pattern(/^[0-9+\-\s()]+$/).min(5).max(20).required(),
});
