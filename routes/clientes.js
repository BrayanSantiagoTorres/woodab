const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectClientes } = require('../controllers/clientes/ctrlSelectClientes')
const { ctrlUpdateCliente } = require('../controllers/clientes/ctrlUpdateCliente')
const { ctrlCreateCliente } = require('../controllers/clientes/ctrlCreateCliente')
const { ctrlDeleteCliente } = require('../controllers/clientes/ctrlDeleteCliente')

router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectClientes
)

router.put('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateCliente
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateCliente
)

router.delete('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteCliente
)

module.exports = router
