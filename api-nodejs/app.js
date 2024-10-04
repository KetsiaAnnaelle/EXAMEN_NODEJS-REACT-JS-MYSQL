const express = require('express')

const mongoose = require('mongoose')
const session = require('express-session')
require("dotenv").config()

const routes = require('./route/Categorie.js')
const routeprod = require('./route/Produit.js')

const cors = require('cors')
const connexion = require('./outil/BD.js') 


const app = express()
const PORT = process.env.PORT | 3001

app.use(express.json());
app.use(cors())


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

if (app.get('env')=== 'production') {
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
}

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log('MongoDB connected...'))
// .catch((err)=>console.log(err))
app.use('/api',routes)
app.use('/api/prod',routeprod)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
















































// const express = require('express');
// const app = express();
// const cors = require('cors');

// const routeCategorie = require('./route/Categorie')




// const bodyParser = require('body-parser')
// var session = require('express-session')
// const connexion = require('./outil/BD.js') 
// var mongoose = require('mongoose');
// const port = 3001

// app.use(express.static('public'))






// const path = require('path')


// app.use(express.json());
// app.use('/api',routeCategorie)


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors({
//   origin:'*'
// }));

// app.get('/api/Categorie',routeCategorie) 

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })