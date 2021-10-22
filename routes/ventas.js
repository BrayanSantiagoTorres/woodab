const express = require('express')
const router = express.Router()
const Ventas = require('../models/ventas')

router.get('/', (req, res) => {
  try{
    res.json({
      name: 'Brayan',
      lastName: 'Torres'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})


module.exports = router
