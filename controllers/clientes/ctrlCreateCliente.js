const { createCliente } = require('../../services/clientes/createCliente')

async function ctrlCreateCliente(req, res){
  try{
    const { name, lastName, genero, email } = req.body
    console.log('Hola desde el controler')
    const cliente = await createCliente({name, lastName, genero, email})
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500).send({message: error.message})
  }
  // console.log('El género del cliente es', genre)
  // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = { ctrlCreateCliente }
