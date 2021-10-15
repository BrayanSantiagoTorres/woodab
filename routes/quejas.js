const express = require('express')
const router = express.Router()
const Quejas = require('../models/quejas')

router.get('/', (req, res) =>{
     try{
          res.json({
               name: 'Aquí podrá subir su queja',
               valor: 3
          })
     }catch(error){
          console.log(`Error: ${error}`)
     }
})

module.exports = router
