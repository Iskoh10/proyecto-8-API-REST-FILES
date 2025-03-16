const { deleteFile } = require('../../utils/deleteFiles');
const Food = require('../models/food');

const getFoods = async (req, res, next) => {
  try {
    const foods = await Food.find().populate('country');
    return res.status(200).json(foods);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id).populate('country');
    return res.status(200).json(food);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postFood = async (req, res, next) => {
  try {
    const { foodName } = req.body;

    const newFood = new Food(req.body);
    if (req.file) {
      newFood.img = req.file.path;
    }

    const foodDuplicated = await Food.findOne({ foodName: foodName });

    if (foodDuplicated) {
      return res.status(400).json('Ese plato ya existe');
    }

    const foodSaved = await newFood.save();
    return res.status(201).json(foodSaved);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: 'Error en el sevidor', detalles: error.message });
  }
};

const updateFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newFood = new Food(req.body);
    if (req.file) {
      const foodToUpdate = await Food.findById(id);
      deleteFile(foodToUpdate.img);
      newFood.img = req.file.path;
    }

    newFood._id = id;

    const foodUpdated = await Food.findByIdAndUpdate(id, newFood, {
      new: true
    });
    return res.status(200).json(foodUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodDeleted = await Food.findByIdAndDelete(id);
    deleteFile(foodDeleted.img);
    return res.status(200).json({ mensaje: 'Plato eliminado:', foodDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getFoods, getFood, postFood, updateFood, deleteFood };
