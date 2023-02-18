const Joi = require("joi");

const Employee = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  job: Joi.string().min(3).max(30).required(),
});

module.exports = Employee;
