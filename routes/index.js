const clientesRouters = require('./clientes')
const mueblesRouters = require('./muebles')
const quejasRouters = require('./quejas')
const usersRouters = require('./users')

//const devolucionesRouters = require('./devoluciones')
//const clientesRouters = require('./clientes')

function routerApi(app){
  app.use('/clientes', clientesRouters)
  app.use('/muebles', mueblesRouters)
  app.use('/quejas', quejasRouters)
  app.use('/users', usersRouters)
}

module.exports = routerApi
