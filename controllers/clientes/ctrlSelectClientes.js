const { selectClientes } = require('../../services/clientes/selectClientes')

async function ctrlSelectClientes(req, res){
  try{
    const { genre } = req.query
    console.log('Hola desde el controler')
    const clientes = await selectClientes(genre)
  return res.status(200).send(clientes)
  }catch(error) {
    return res.status(error.status || 500).send({message: error.message})
  }
  // console.log('El género del cliente es', genre)
  // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = { ctrlSelectClientes }
