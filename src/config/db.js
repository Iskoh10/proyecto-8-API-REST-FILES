const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Conectamos con la BBDD ❤️‍🔥');
  } catch (error) {
    console.log('No se puedo conectar a la BBDD');
  }
};

module.exports = { connectDB };
