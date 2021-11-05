const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectClientes } = require('../controllers/clientes/ctrlSelectClientes')

router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectClientes
)

router.put('/',
  passport.authenticate('jwt', {session:false}),
)

router.delete('/',
  passport.authenticate('jwt', {session:false}),
)

module.exports = router
