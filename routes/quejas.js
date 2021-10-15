const express = require('express')
const router = express.Router()
const Quejas = require('../models/quejas')

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
