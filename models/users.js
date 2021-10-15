const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
  name: String,
  lastName: { type: String, default: ''},
  phone: { type: String, default: ''},
  edad: { type: String, dafault: ''},
  genero: { type: String, enum: ['M', 'F', 'U'], defaul: 'u'},
  pictures: { type: String, default: 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png'},
  email: { require: true, type: String, lowercase: true, trim: true, unique: true},
  actualsubjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}]
  },{
    timestamps: true
  })

  const Users = mongoose.model('Users', usersSchema)
  module.exports = Users
