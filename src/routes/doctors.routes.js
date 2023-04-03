import { Router } from "express";
import { validateSchema } from '../middlewares/validateSchema.js';
import { searchDoctor } from "../schemas/schemas.js";
import doctorsController from "../controllers/doctorsController.js";
import { validateToken } from "../middlewares/validateToken.js";

const doctorsRoutes = Router();


doctorsRoutes.get('/doctor', validateToken, validateSchema(searchDoctor),doctorsController.searchDoctor)
doctorsRoutes.get('/doctor/:id/schedule',validateToken, doctorsController.getDoctorSchedule) 



export default doctorsRoutes