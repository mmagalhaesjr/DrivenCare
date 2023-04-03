import { Router } from "express";


const routes = Router();

routes.use("/users");
routes.use("/doctor");


export default routes;
