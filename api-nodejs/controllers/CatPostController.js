const CategorieModels = require("../models/CategorieModels")
// const ProduitsModel = require('ProduitsModel')
const uniqid = require('uniqid')

module.exports.getCategorie = async (req, res) => {
    const Categorie = await CategorieModels.find()
    res.send(Categorie)
   
}

module.exports.saveCategories = (req, res) => {
    const {name} = req.body

    CategorieModels.create({
        idCategorie: uniqid(),
        name
    })
    .then((data) => {
        console.log("Saved Successfully...");
        res.status(201).send(data)
    }).catch((err) =>{
        console.log(err);
        res.send({error:err, msg:"Something want wrong!"})
    })

    
   
}

module.exports.updateCategories = (req, res) => {
    const {id} = req.params
    const {Categorie} = req.body;


    CategorieModels.findByIdAndUpdate(id,{Categorie})
        .then((data) => {
            console.log("Update Successfully...");
            res.status(201).send(data)
        }).catch((err) =>{
            console.log(err);
            res.send({error:err, msg:"Something want wrong!"})
        }) 
}


module.exports.deleteCategorie = (req, res) => {
    const {id} = req.params

    CategorieModels.deleteOne({idCategorie: id})
        .then((data) => {
            ProduitsModel.deleteMany({idCategorie: id})
            .then(u => {
                console.log("Delete Successfully...");
                res.status(201).send(data)
        })
            }).catch((err) =>{
                console.log(err);
                res.send({error:err, msg:"Something want wrong!"})
            }) 
}