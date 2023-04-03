import { Router } from "express";
import { validateSchema } from '../middlewares/validateSchema.js';
import { validateToken } from "../middlewares/validateToken.js";
import appointmentController from "../controllers/appointmentController.js";

const appointmentsRoutes = Router();


appointmentsRoutes.post('/appointment/:id',validateToken,appointmentController.createAppointment)





export default appointmentsRoutes