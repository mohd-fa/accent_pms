const joi = require("@hapi/joi");

const registerSchema = joi.object({
  phone: joi
    .string()
    .required()
    .pattern(/^\+[1-9]{1}[0-9]{3,14}$/)
    .trim(),
  email: joi.string().email().lowercase().required().trim(),
  password: joi.string().required().min(6),
  name: joi.string().required().trim(),
  role: joi.string().default("client").valid("client"),
});

const loginSchema = joi.object({
  email: joi.string().lowercase().required().trim(),
  password: joi.string().required().min(6),
});

module.exports = { registerSchema, loginSchema };
