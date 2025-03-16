require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('../../api/models/food');
const Country = require('../../api/models/country');
const foods = require('../../data/food');
const countries = require('../../data/country');

const launchSeed = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    await Food.collection.drop();
    console.log('Platos eliminados');

    await Country.collection.drop();
    console.log('Paises Eliminados');

    const countriesInserted = await Country.insertMany(countries);
    console.log('Paises introducidos');

    const countriesMap = {};
    countriesInserted.forEach((country) => {
      countriesMap[country.countryName] = country._id;
    });

    const foodsForInsert = foods(countriesMap);

    await Food.insertMany(foodsForInsert);
    console.log('Platos introducidos');

    await mongoose.disconnect();
  } catch (error) {
    console.log('La semilla falló');
  }
};

launchSeed();
