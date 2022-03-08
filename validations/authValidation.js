const Joi = require('joi')

// Register Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	});

	return schema.validate(data);
};

module.exports.loginValidation = loginValidation