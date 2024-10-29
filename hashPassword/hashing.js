import bcrypt from 'bcryptjs'
const saltRound = 10;
const hashGen = async(plainPassword) =>{
    const salt = await bcrypt.genSalt(saltRound)
    const hash =await bcrypt.hash(plainPassword,salt)
    return hash;
}
export default hashGen;