import { Router } from "express";
import { validateSchema } from '../middlewares/validateSchema.js';
import { doctorSchema, patientSchema, signinSchema } from '../schemas/schemas.js';
import authController from "../controllers/authController.js";





const authRoutes = Router();

authRoutes.post('/signup/doctor',validateSchema(doctorSchema),authController.doctorSignup)
authRoutes.post('/signup/patient',validateSchema(patientSchema),authController.patientSignup)

authRoutes.post('/signin',validateSchema(signinSchema), authController.signin) 





export default authRoutes