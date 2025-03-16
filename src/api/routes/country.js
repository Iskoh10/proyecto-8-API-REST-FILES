const upload = require('../../middlewares/file');
const {
  getCountries,
  getCountry,
  postCountry,
  updateCountry,
  deleteCountry
} = require('../controllers/country');

const countriesRouter = require('express').Router();

countriesRouter.get('/:id', getCountry);
countriesRouter.get('/', getCountries);
countriesRouter.put('/:id', upload.single('img'), updateCountry);
countriesRouter.delete('/:id', deleteCountry);
countriesRouter.post('/', upload.single('img'), postCountry);

module.exports = countriesRouter;
