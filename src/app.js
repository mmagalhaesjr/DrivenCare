import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import doctorsRoutes from "./routes/doctors.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import appointmentsRoutes from './routes/ appointments.routes.js';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

app.use([authRoutes, doctorsRoutes,appointmentsRoutes])



const PORTA = process.env.PORTA || 5000;
app.listen(PORTA, () => console.log(`***Server running in port: ${PORTA}***`));