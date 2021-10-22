const {Strategy, ExtractJwt} = require('passport-jwt')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: '6de389ed5da80327ab292db7c3f9f3cce1c1d343b562f8c9fa597f35bd85d8bc'
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
})

module.exports = JwtStrategy
