require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const foodsRouter = require('./src/api/routes/food');
const countriesRouter = require('./src/api/routes/country');
const cloudinary = require('cloudinary').v2;

const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

connectDB();

app.use(express.json());

app.use('/api/v1/foods', foodsRouter);
app.use('/api/v1/countries', countriesRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen('3000', () => {
  console.log('Servidor levantado en http://localhost:3000');
});
