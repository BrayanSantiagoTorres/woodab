const express = require('express')
const routerApi = require('./routes')
const app = express()
const { config } = require('./config/index')

const port = config.port

const mongoose = require('mongoose')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`


console.log('*******************************')
console.log(MONGO_URI)
mongoose.connect(MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true}
).then(() => console.log('Existe conexión ahora')).catch(e=>console.log(e))


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
