const express = require('express')
const router = express.Router()
const Muebles = require('../models/muebles')

router.get('/', (req, res) => {
  res.json([
    {
      name: 'mueble 1',
      price: 800,
      num: 4
    },
    {
      name: 'mueble 2',
      price: 1400,
      num: 6
    },
    {
      name: 'mueble 3',
      price: 2900,
      num: 2
    },
    {
      name: 'mueble 4',
      price: 5000,
      num: 6
    }
  ])
})

router.get('/filter', (req, res) => {
  res.json(
    {
      name: 'mueble 3',
      price: 2900,
      num: 2
    })
})


module.exports = router
