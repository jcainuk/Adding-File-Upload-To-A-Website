const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(userRoutes);

db.connectToDatabase().then(() => {
  const { PORT } = process.env || 3000;
  // Listen
  app.listen(3000);
});
