const express = require('express');
const multer = require('multer');

const upload = multer({});
const router = express.Router();

router.get('/', (req, res) => {
  res.render('profiles');
});

router.get('/new-user', (req, res) => {
  res.render('new-user');
});

router.post('/profiles', (req, res) => {

});

module.exports = router;
