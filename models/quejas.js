const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quejasSchema = new Schema({

  clvqueja: String,
  noqueja: {type: Number},
  name: String,
  Tdqueja: String,
  validUntil: Date,
  valid: {type: Boolean, default: true}
}, {
  timestamps:true
})

const Quejas = mongoose.model('Quejas', quejasSchema)
module.exports = Quejas
