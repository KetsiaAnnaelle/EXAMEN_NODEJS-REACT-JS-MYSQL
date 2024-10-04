const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Voiture') //liaison entre l'application et la BD
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err))
