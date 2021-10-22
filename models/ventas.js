const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({

  fecha: Date,
  cantidad_producto: {type: Number},
  nombre_producto: String,
  pictures: { type: String, default: ''}

  },{
    timestamps: true
  })

  const Ventas = mongoose.model('Ventas', ventasSchema)
  module.exports = Ventas
