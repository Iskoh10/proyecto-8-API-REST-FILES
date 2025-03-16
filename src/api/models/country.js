const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
  {
    countryName: { type: String, required: true },
    img: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'countries'
  }
);

const Country = mongoose.model('countries', countrySchema, 'countries');

module.exports = Country;
