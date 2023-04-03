import bcrypt, { hash } from 'bcrypt';
import authRepositories from "../repositories/authRepositories.js";
import { v4 as uuid } from "uuid";

export async function createDoctor({ name,email, password, location, speciality_id}) {

const {rowCount} = await authRepositories.findByEmail(email,"doctor")
if (rowCount) throw new Error("User already exists");

const hashPassword = bcrypt.hashSync(password,10)

await authRepositories.doctorSignup({name,email, hashPassword, location, speciality_id})

}

export async function createPatient({ name,email, password, telephone}) {
  const {rowCount} = await authRepositories.findByEmail(email,"patient")
  if (rowCount) throw new Error("User already exists");

  const hashPassword = bcrypt.hashSync(password,10)

  await authRepositories.patientSignup({name,email, hashPassword, telephone})
 
  }


  export async function login({email, password,type}){
    
    const {rowCount, rows} = await authRepositories.findByEmail(email,type)
    if(!rowCount) throw new Error("User does not exist");

    const token = uuid()
    const user_id = rows[0].id 
    const passwordValidated = bcrypt.compareSync(password,rows[0].password)
    if(!passwordValidated) throw new Error("Email or password are incorrect");

    await authRepositories.login({user_id, token,type})

    return token
   
  }
  














  

