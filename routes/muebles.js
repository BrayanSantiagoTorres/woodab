const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      name: 'mueble 1',
      price: 800
    },
    {
      name: 'mueble 2',
      price: 1400
    },
    {
      name: 'mueble 3',
      price: 2900
    },
    {
      name: 'mueble 4',
      price: 5000
    }
  ])
})

router.get('/filter', (req, res) => {
  res.json(
    {
      name: 'mueble 3',
      price: 2900
    })
})


module.exports = router
