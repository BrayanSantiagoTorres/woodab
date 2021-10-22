const clientesRouters = require('./clientes')
const productoRouters = require('./producto')
const facturaRouters = require('./factura')
const ventasRouters = require('./ventas')

function routerApi(app){
  app.use('/clientes', clientesRouters)
  app.use('/producto', productoRouters)
  app.use('/factura', facturaRouters)
  app.use('/ventas', ventasRouters)
}

module.exports = routerApi
