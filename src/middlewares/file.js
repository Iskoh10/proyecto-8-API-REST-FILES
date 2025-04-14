const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = (folder) =>
  new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: req.query.folder || 'foodAtlas',
        allowedFormats: ['jpg', 'jpeg', 'png', 'gif']
      };
    }
  });

const upload = multer({ storage: storage() });

module.exports = { upload };
