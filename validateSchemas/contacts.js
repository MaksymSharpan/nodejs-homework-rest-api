

const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().min(2).required(),
  phone: Joi.number().min(0).required(),
});

// const schemaUpdate = Joi.object({
//   name: Joi.string().min(1),
//   email: Joi.string().min(1),
//   phone: Joi.string().min(1),
// });


module.exports = contactSchema;
