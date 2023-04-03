import { createDoctor,createPatient, login } from "../services/authServices.js";

async function doctorSignup(req,res){
    const{name,email, password, location, speciality_id} = req.body;
    try {
        await createDoctor({name,email, password, location, speciality_id});
        return res.sendStatus(201)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function patientSignup(req,res){
    const{name,email, password, telephone} = req.body;
    try {
        await createPatient({name, email,password,telephone});
        return res.sendStatus(201)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function signin(req,res){
    const{email,password} = req.body
    const{type} = req.headers

    try {
        const token = await login({email,password,type})
        return res.send(token).status(201)
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
}


export default {
    doctorSignup,
    patientSignup,
    signin
} 


