const mongoose = require('mongoose')
const Schema = mongoose.Schema
const clientesSchema = new Schema({

     name: String,
     lastName: { type: String, default: '' },
     address: { type: String,lowercase: true, trim: true, default: 'Guadalajara' },
     phone: { type: String, default: '' },
     genero: { type: String, enum: ['H', 'M', 'U'], default: 'U'},
     validUntil: 'Date',
     valid: { type: Boolean, default: true }
},{
     timestamps: true
})

const Clientes = mongoose.model('Clientes', clientesSchema)
module.exports = Clientes
