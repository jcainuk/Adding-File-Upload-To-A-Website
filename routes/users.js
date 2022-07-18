const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'images' });
const router = express.Router();

router.get('/', (req, res) => {
  res.render('profiles');
});

router.get('/new-user', (req, res) => {
  res.render('new-user');
});

router.post('/profiles', upload.single('image'), (req, res) => {
  const uploadedImageFile = req.file;
  const userData = req.body;

  console.log(uploadedImageFile);
  console.log(userData);

  res.redirect('/');
});

module.exports = router;
