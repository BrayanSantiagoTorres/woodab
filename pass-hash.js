const bcrypt = require('bcrypt')

async function hashPassword(){
    const myPassword = 'contraseña 12.24'
    const hash = await bcrypt.hash(myPassword, 8)
    console.log(hash)
}

hashPassword()
