
import authRepositories from "../repositories/authRepositories.js";


export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).send("No token");

    try {
        const { rows: [session] } = await authRepositories.findSessionByToken(token)
        if (!session) return res.status(401).send("session not found");

        if(session.type === "patient"){
            res.locals.userId = session.patient_id
        
        } else{
            res.locals.userId = session.doctor_id
        }

        res.locals.type = session.type
        
       next()
    } catch (error) {
        res.status(500).send('erro...')
    }
}
