const express = require('express')
const router = express.Router()
const Users = require('../models/users')

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
