const express = require('express');
const multer = require('multer');

const db = require('../data/database');

const storageConfig = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await db.getDB().collection('users').find().toArray();
  // eslint-disable-next-line object-shorthand
  res.render('profiles', { users: users });
});

router.get('/new-user', (req, res) => {
  res.render('new-user');
});

router.post('/profiles', upload.single('image'), async (req, res) => {
  const uploadedImageFile = req.file;
  const userData = req.body;

  await db.getDB().collection('users').insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path,
  });

  res.redirect('/');
});

module.exports = router;
