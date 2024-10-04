const mongoose = require('mongoose')
// const uniqid= require('uniqid')



const Schema = mongoose.Schema;
 
const categorieSchema = new Schema({
  idCategorie: { type: String, required:true },
  name: { type: String, required:true  },

});

module.exports = mongoose.model('Categorie', categorieSchema);
