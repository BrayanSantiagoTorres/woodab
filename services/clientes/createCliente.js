const Cliente = require('../../models/clientes')

async function createCliente({lastName, email, genero, name}){
  try{
    const clienteCreated = await Cliente.create({
      name,
      lastName,
      genre: genero, //si no funciona borra un genero y debe quedar asi: genero,
      email
    })

    console.log(clienteCreated)
    return clienteCreated
  } catch(error){
    return {message: error.message}
  }
}

module.exports = { createCliente }
