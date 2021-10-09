const mueblesRouters = require('./muebles')
//const devolucionesRouters = require('./devoluciones')
//const clientesRouters = require('./clientes')

function routerApi(app){
  app.use('/muebles', mueblesRouters)
}

module.exports = routerApi
