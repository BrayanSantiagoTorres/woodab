const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mueblesSchema = new Schema({


     name: 'String',
     fecha: 'String',
     cantidadmuebl: {type: String, trim: true, default: ' 25 muebles'},
     categorias: {type: String, default: 'Roble, Pino'},
     precio: {type: String, default: ' 2000'},
     validUntil: 'Date',
     valid: { type: Boolean, default: true },



},{
     timestamps: true
})

const Muebles = mongoose.model('Muebles', mueblesSchema)
module.exports = Muebles
