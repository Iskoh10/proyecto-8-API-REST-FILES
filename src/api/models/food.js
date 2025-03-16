const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    img: { type: String, required: true },
    country: {
      type: mongoose.Types.ObjectId,
      ref: 'countries',
      required: false
    }
  },
  {
    timestamps: true,
    collection: 'foods'
  }
);

const Food = mongoose.model('foods', foodSchema, 'foods');

module.exports = Food;
