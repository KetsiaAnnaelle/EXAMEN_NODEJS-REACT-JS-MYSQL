const mongoose = require('mongoose')
// const uniqid= require('uniqid')

const Schema = mongoose.Schema;
 
const productSchema = new Schema({
  idProduits: { type: String, required:true },
  nameProd: { type: String, required:true  },
  idCategorie: { type: String, required:true  },
  description: { type: String, required:true  },
  prixProd: { type: String, required:true  },
  imageProd: { type: String, required:true},

});

module.exports = mongoose.model('produits', productSchema);


