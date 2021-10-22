const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy( //se declara la estrategia
  async (email, password, done) => { //utiliza una función asincrona
    try{
      const usersTest = [ //se construye un arreglo de usuarios
        {name: 'Brayan', email: 'admin5253@gmail.com', password: '$2b$08$ZjrPGF.m9vSz7ZlGBWpOOO5nClsuhfLdY7lM3altk2YKVWfrV54yq', rol: 'admin'},
        {name: 'Alfredo', email: 'usuario26183@gmail.com', password: '$2b$08$ZjrPGF.m9vSz7ZlGBWpOOO5nClsuhfLdY7lM3altk2YKVWfrV54yq', rol: 'user'},
        {name: 'Javier', email: 'jvrt5856@gmail.com', password: '$2b$08$ZjrPGF.m9vSz7ZlGBWpOOO5nClsuhfLdY7lM3altk2YKVWfrV54yq', rol: 'user'}
      ]
      const user = usersTest[1]
      if(!user) return done(null, null) //no hay error pero no hay usuario
      console.log(user)
      const isMatch = await bcrypt.compare(password, user.password) //si hay match lo comparamos con bcrypt, el password con el password del user
      if(!isMatch) throw { status: 401, message: 'Sin Autorización', error: true} //en caso de no haber match se manda un error con el mensaje
      done(null, user) //si hay match se manda el usuario
    } catch(error){
      done(error, false)
    }
  }
)

module.exports = LocalStrategy
