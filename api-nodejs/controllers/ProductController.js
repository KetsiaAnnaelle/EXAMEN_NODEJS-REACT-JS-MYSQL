const ProduitsModels = require("../models/ProduitsModels")
const multer = require('multer')
const uniqid = require('uniqid')
// const nomcat = require("../models/CategorieModels").name


module.exports.getProduits = async (req, res) => {
    const Produits = await ProduitsModels.find()
    // const idcat = await 
    res.send(Produits)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //cb veut dire callback
      cb(null, './public/image/')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now() + file.originalname)
    }
})
  
const upload = multer({ 
    storage: storage,
    limits:{
      fieldSize:1024*1024*3 //taille du fichier image(3 mega octct)
    },
    fileFilter:(req, file, cb)=>{ //pas compris
  
        if (
            file.mimetype==='image/png' 
        ) {
        cb(null,true)
        }else{
            cb(null,false)
            cb(new Error('uniquement les fichiers images'))
        }
    } 
  
})


// module.exports= nomcat

module.exports.saveProduits =(upload.single('imageProd'),(req, res)  => {
    console.log(req.body);
    // const {nameProd, idCategorie, description, prixProd} = req.body
    // const {imageProd} = req.file

    // ProduitsModels.create({
    //     idProduits: uniqid(),
    //     nameProd,
    //     idCategorie,
    //     description,
    //     prixProd,
    //     imageProd: imageProd.filename
    // })
    // .then((data) => {
    //     console.log("Saved Successfully...");
    //     res.status(201).send(data)
    // }).catch((err) =>{
    //     console.log(err);
    //     res.send({error:err, msg:"Something want wrong!"})
    // })
})

module.exports.updateProduits = (req, res) => {
    const {id} = req.params
    const {Categorie} = req.body;


    ProduitsModels.findByIdAndUpdate(id,{Categorie})
        .then((data) => {
            console.log("Update Successfully...");
            res.status(201).send(data)
        }).catch((err) =>{
            console.log(err);
            res.send({error:err, msg:"Something want wrong!"})
        }) 
}


module.exports.deleteProduits = (req, res) => {
    const {id} = req.params
    // const {Categorie} = req.body;


    ProduitsModels.deleteOne({idProduits: id})
        .then((data) => {
            console.log("Delete Successfully...");
            res.status(201).send(data)
        }).catch((err) =>{
            console.log(err);
            res.send({error:err, msg:"Something want wrong!"})
        }) 
}