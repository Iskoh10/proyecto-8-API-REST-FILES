const { deleteFile } = require('../../utils/deleteFiles');
const Country = require('../models/country');

const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find();
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = await Country.findById(id);

    if (country) {
      return res.status(200).json(country);
    } else {
      return res.status(404).json('País no encontrado');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postCountry = async (req, res, next) => {
  try {
    const { countryName } = req.body;
    const newCountry = new Country(req.body);

    if (req.file) {
      newCountry.img = req.file.path;
    }

    const countryDuplicated = await Country.findOne({
      countryName: countryName
    });

    if (countryDuplicated) {
      return res.status(400).json('Ese pais ya existe');
    }

    const countrySaved = await newCountry.save();
    return res.status(201).json(countrySaved);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: 'Error en el servidor', detalles: error.message });
  }
};

const updateCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCountry = new Country(req.body);
    if (req.file) {
      const countryToUpdate = await Country.findById(id);

      if (countryToUpdate) {
        deleteFile(countryToUpdate.img);
        newCountry.img = req.file.path;
      } else {
        return res.status(404).json('País no encontrado');
      }
    }
    newCountry._id = id;

    const countryUpdated = await Country.findByIdAndUpdate(id, newCountry, {
      new: true
    });

    return res.status(200).json(countryUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryDeleted = await Country.findByIdAndDelete(id);

    if (countryToUpdate) {
      deleteFile(countryDeleted.img);
      return res.status(200).json({
        mensaje: 'Pais eliminado',
        countryDeleted
      });
    } else {
      return res.status(404).json('País no encontrado');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getCountry,
  getCountries,
  postCountry,
  updateCountry,
  deleteCountry
};
