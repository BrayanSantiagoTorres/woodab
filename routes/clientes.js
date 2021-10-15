const express = require('express')
const router = express.Router()
const Clientes = require('../models/clientes')

router.get('/', (req, res) =>{
     try{
          res.json({
               name: 'Mario',
               lastName: 'Dominguez'
          })
     }catch(error){
          console.log(`Error: ${error}`)
     }
})

module.exports = router
