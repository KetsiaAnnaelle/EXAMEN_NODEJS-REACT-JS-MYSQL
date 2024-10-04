const express = require('express')

const {
  getProduits, 
  saveProduits, 
  deleteProduits, 
  updateProduits
} = require('../controllers/ProductController')
// const routeProduits = express();
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/getprod', getProduits);
router.post('/saveprod', saveProduits)
router.put('/update/:id', updateProduits)
router.delete('/deleteprod/:id', deleteProduits);

module.exports = router;


