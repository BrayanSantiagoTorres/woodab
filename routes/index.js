const express = require('express') //se añadio
const clientesRouters = require('./clientes')
const productoRouters = require('./producto')
const facturaRouters = require('./factura')
const ventasRouters = require('./ventas')
const authRouters = require('./auth') //tambien el auth
const usersRouters = require('./users')

function routerApi(app){
  app.use(express.json()) // el express json
  app.use('/auth', authRouters) // y tambien el de auth
  app.use('/clientes', clientesRouters)
  app.use('/producto', productoRouters)
  app.use('/factura', facturaRouters)
  app.use('/ventas', ventasRouters)
  app.use('/users', usersRouters)
}

module.exports = routerApi
