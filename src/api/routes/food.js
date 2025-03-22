const upload = require('../../middlewares/file');
const {
  getFoods,
  getFood,
  postFood,
  updateFood,
  deleteFood,
  folderChanged
} = require('../controllers/food');

const foodsRouter = require('express').Router();

foodsRouter.get('/:id', getFood);
foodsRouter.get('/', getFoods);
foodsRouter.put('/:id', upload.single('img'), updateFood);
foodsRouter.delete('/:id', deleteFood);
foodsRouter.post('/', upload.single('img'), postFood);
foodsRouter.post('/changer/:id', folderChanged);

module.exports = foodsRouter;
