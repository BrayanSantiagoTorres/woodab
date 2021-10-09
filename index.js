const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Holiwis! bienvenido a node y express js')
})

app.get('/ruta-dos', (req, res) => {
  res.send('Hey! ¿Que tal estás?')
})

app.get('/clientes/{id}', (req, res) => {
  res.send('Hey! ¿Que tal estás?')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
