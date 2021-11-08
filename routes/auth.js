const express = require('express')
const passport = require('../utils/auth')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/login',
  passport.authenticate('local', {session:false}), //el usuario se logea
  async (req, res, next)=>{
    try{
      const user = req.user
      const payload = { //se pide datos al usuario id y rol
        sub: user.id,
        role: user.rol
      }
      //se genera un token unico con ese usuario
      const token = jwt.sign(payload, '6de389ed5da80327ab292db7c3f9f3cce1c1d343b562f8c9fa597f35bd85d8bc') //los datos se unen con la clave secreta
      res.json({ //se pide el user y el token
        user,
        token
      })

      //res.json(req.user)
    } catch(error){
      next(error)
    }
  }
)

module.exports = router
