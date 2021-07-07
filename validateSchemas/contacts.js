const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().min(2).required(),
  phone: Joi.string().min(0).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().min(2),
  phone: Joi.string().min(0),
});

(module.exports = contactSchema), updateSchema;
