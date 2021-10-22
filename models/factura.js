const mongoose = require('mongoose')
const Schema = mongoose.Schema
const facturaSchema = new Schema({

  fecha: Date,
  monto: {type: Number},
  idProducto: String
}, {
  timestamps:true
})

const Factura = mongoose.model('Factura', facturaSchema)
module.exports = Factura
