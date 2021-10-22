const {config} = require('../config/index')
const apid = encodeURIComponent(config.dbApiPassword)

function checkApiKey(req, res, next){
  try{
    const apiKey = req.headers['api']
    if(apiKey == apid) next()
    else throw { status: 401, message: 'Sin Autorización', error: true}
  } catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
}

module. exports = { checkApiKey }
