const express = require('express')
const cors = require('cors')
const app = express()

// IMPORT ROUTES
const authRoute = require('./controllers/authController');

// MIDDLEWARES
app.use(express.json());
app.use(cors())

// ROUTE MIDDLEWARES
app.use('/api/account', authRoute);

const PORT = process.env.PORT || 3000;

// LISTEN TO PORT
app.listen(PORT, () => {
  console.log('Connected to Port ' + PORT);
});