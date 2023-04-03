import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import doctorsRoutes from "./routes/doctors.routes.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

app.use([authRoutes, doctorsRoutes])



const PORTA = process.env.PORTA || 5000;
app.listen(PORTA, () => console.log(`***Server running in port: ${PORTA}***`));