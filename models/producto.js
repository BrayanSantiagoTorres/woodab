const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema({


     name: String,
     fecha: Date,
     existencia: {type: String, trim: true, default: '0'},
     categorias: {type: String, default: ''},
     precio: {type: String, default: ''}

},{
     timestamps: true
})

const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto
