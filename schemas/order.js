const Joi = require("joi");

const addOrderSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name" field`,
    "string.base": `"name" must be string`,
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required "email" field`,
    "string.base": `"email" must be string`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required "phone" field`,
    "string.base": `"phone" must be string`,
    "string.empty": `"phone" cannot be empty`,
  }),
  address: Joi.string().required(),
  order: Joi.any(),
  total: Joi.number(),
  map: Joi.any(),
});

module.exports = addOrderSchema;
