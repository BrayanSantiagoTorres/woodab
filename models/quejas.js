const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quejasSchema = new Schema({

  t_queja: String,
  no_queja: {type: Number},
  name: String
}, {
  timestamps:true
})

const Quejas = mongoose.model('Quejas', quejasSchema)
module.exports = Quejas
