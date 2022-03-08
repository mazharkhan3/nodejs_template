const router = require('express').Router();
const { successResponse, errorResponse } = require('../common/response')
const { loginValidation } = require('../validations/authValidation')

router.post('/login', (req, res) =>
{
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(errorResponse(error.details[0].message, {}));

  try
  {
    if (req.body.email == "admin@gmail.com" && req.body.password == "123456")
    {
      res.status(200).send(successResponse('Successfully Logged In'));
    } else
    {
      res.status(400).send(errorResponse("Invalid email or password"))
    }
  } catch (error)
  {
    res.status(500).send(errorResponse(error.message));
  }
})

module.exports = router;