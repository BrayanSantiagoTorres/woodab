const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
  name: String,
  lastName: { type: String, default: ''},
  phone: { type: String, default: ''},
  edad: { type: String, dafault: ''},
  genero: { type: String, enum: ['M', 'F', 'U'], defaul: 'u'},
  pictures: { type: String, default: ''},
  email: { require: true, type: String, lowercase: true, trim: true, unique: true},

  },{
    timestamps: true
  })

  const Users = mongoose.model('Users', usersSchema)
  module.exports = Users
