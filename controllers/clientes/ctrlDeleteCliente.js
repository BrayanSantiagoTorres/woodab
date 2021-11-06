const { deleteCliente } = require('../../services/clientes/deleteCliente')

async function ctrlDeleteCliente(req, res){
  try{
    const { email } = req.params
    console.log('Hola desde el controler')
    const cliente = await deleteCliente(email)
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500).send({message: error.message})
  }
  // console.log('El género del cliente es', genre)
  // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = { ctrlDeleteCliente }
