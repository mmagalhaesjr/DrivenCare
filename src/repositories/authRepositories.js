import connectionDb from "../config/database.js";



async function findByEmail(email,type){
   return await connectionDb.query (`
    SELECT * FROM ${type}s where email = $1
    `,[email])
}



async function doctorSignup({name,email, hashPassword, location, speciality_id}){
    return await connectionDb.query(`
    INSERT INTO doctors (name,email, password, location, speciality_id) VALUES($1,$2,$3,$4,$5)`,
    [name,email, hashPassword, location, speciality_id])
}

async function patientSignup({name,email, hashPassword, telephone }){
    return await connectionDb.query(`
    INSERT INTO patients (name,email, password, telephone) VALUES($1,$2,$3,$4)`,
    [name,email, hashPassword, telephone])
}

async function login({user_id, token,type}){
    return await connectionDb.query(`
        INSERT INTO sessions (${type}_id, token,type) VALUES ($1,$2,$3)
    `,[user_id,token,type])
}


export default  {
    doctorSignup,
    patientSignup,
    findByEmail,
    login
}