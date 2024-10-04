const express = require('express')

const {
  getCategorie, 
  saveCategories, 
  deleteCategorie, 
  // updateCategories
} = require('../controllers/CatPostController')
// const routeCategorie = express();
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/get', getCategorie);
router.post('/save', saveCategories)
// router.put('/update/:id', updateCategories)
router.delete('/delete/:id', deleteCategorie);

module.exports = router;






// routeCategorie.use(express.static('public'))

// const mongoose = require('mongoose')
// const uniqid= require('uniqid')
// // const multer = require('multer')
// const path = require('path')



// const Schema = mongoose.Schema;
 
// const categorieSchema = new Schema({
//   idCategorie: { type: String, required:true },
//   name: { type: String, required:true  },

// });

// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) { //cb veut dire callback
// //       cb(null, './public/image/')
// //     },
// //     filename: function (req, file, cb) {
        
// //         cb(null, Date.now() + file.originalname)
// //     }
// // })

// const categorieModel = mongoose.model('Categorie', categorieSchema);
// // module.exports = router;
// module.exports = routeCategorie;

// routeCategorie.post('/ategorie', function(req,res){
//   let nom = req.body.nomcat
   
//   if (nom=='') {
//     req.session.error=true
//     res.send('/categorie')
//   }else{ //CREATION D'UN UTILISATEUR            le cote serveur recupere la valeur d'un champs a travres l'attribut name
//     let newCategorie= new userModel({
//       idUser: uniqid(),
//       name:req.body.nomcat,
      
//     })

//     newCategorie.save()
//     .then(() =>{
//       res.redirect('/Categorie')
//     })
//     .catch((err)=> console.log(err))
//   }
// })
// //creation d'une route
// // router.get('/', (req, res) => {
// //   userModel.find()
// //   .then((item) =>{
// //     res.render('pages/categorie', {categorie:item}) //ici users c'est ma route

// //   })
// //    .catch((err) => console.log(err)) 
  
// // })
//  //ici on cree la route delete avec pour parametre id 
// // router.get('/delete/:id', (req, res) => {
// //   userModel.deleteOne({idUser:req.params.id}) //ici on supprime un utilisateur a travers son id
// //   .then(() =>{
// //     res.redirect('/') //ici on redirige vers la page index

// //   })
// //    .catch((err) => console.log(err)) 
  
// // })




