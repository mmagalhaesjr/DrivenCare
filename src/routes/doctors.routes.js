import { Router } from "express";
import { validateSchema } from '../middlewares/validateSchema.js';
import { searchDoctor } from "../schemas/schemas.js";
import doctorsController from "../controllers/doctorsController.js";

const doctorsRoutes = Router();


doctorsRoutes.get('/doctor', validateSchema(searchDoctor),doctorsController.searchDoctor)



export default doctorsRoutes