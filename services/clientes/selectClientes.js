const Clientes = require('../../models/clientes')

async function selectClientes(genre){
  try{
    console.log('Estoy dentro del servicio')
    console.log(genre)
    /*let clientes
    if (!genre){
      clientes = await Cliente.find()
    }
    else{
      clientes = await Cliente.find({genre})
    }*/
    const clientes = !genre ? await Clientes.find() : await Clientes.find({genre})
    console.log(clientes)
    return clientes
  } catch(error){
    return {message: error.message}
  }
}

module.exports = { selectClientes }
