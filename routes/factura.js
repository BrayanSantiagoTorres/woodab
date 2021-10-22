const express = require('express')
const router = express.Router()
const Factura = require('../models/factura')

router.get('/', (req, res) =>{
     try{
          res.json({
               name: 'Escriba el nombre de su queja'
          })
     }catch(error){
          console.log(`Error: ${error}`)
     }
})

module.exports = router
