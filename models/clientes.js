const mongoose = require('mongoose')
const Schema = mongoose.Schema
const clientesSchema = new Schema({

  name: String,
  lastName: { type: String, default: ''},
  phone: { type: String, default: ''},
  edad: { type: String, dafault: ''},
  genre: { type: String, enum: ['M', 'F', 'U'], defaul: 'u'},
  pictures: { type: String, default: ''},
  email: { require: true, type: String, lowercase: true, trim: true, unique: true},

  },{
    timestamps: true
  })

const Clientes = mongoose.model('Clientes', clientesSchema)
module.exports = Clientes
