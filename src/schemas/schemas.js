import Joi from "joi";

export const doctorSchema = Joi.object({
    name:Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().min(5).required(),
    location:Joi.number().required(),
    speciality_id:Joi.number().required()
})

export const patientSchema = Joi.object({
    name:Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().min(5).required(),
    telephone:Joi.number().required()
})

export const signinSchema = Joi.object({
    email:Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().min(5).required()
})

export const searchDoctor = Joi.object({
    
    searchTerm:Joi.string().min(1).required()
        
})
