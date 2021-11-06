const Cliente = require('../../models/clientes')

async function updateCliente({lastName, email, name}){
  try{
    console.log('Estoy dentro del servicio')
    console.log(email)
    const clienteUpdated = await Cliente.findOneAndUpdate(
      {email},
      {name, lastName},
      {new: true}
    )

    console.log(clienteUpdated)
    return clienteUpdated
  } catch(error){
    return {message: error.message}
  }
}

module.exports = { updateCliente }
