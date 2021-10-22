const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'contraseña 12.24'
  const myPasswordHashed = '$2b$08$0TMMOp.dWIeYe7jXXGDVQugNO1iIXKS91hlGSm7TIiNDjeVPz40aO'
  const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
