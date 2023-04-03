import appointmentServices from "../services/appointmentServices.js";


async function createAppointment(req,res){
    const schedule_id = req.params.id
    const patient_id =  res.locals.userId 

    try {
        await appointmentServices.createAppointment(schedule_id, patient_id);
        res.sendStatus(201)
    } catch (error) {
        return res.status(500).send(error.message);
    }


}


async function getAppointments(req,res){
    const type = res.locals.type
    const id =  res.locals.userId 
   
    try {
        const appointments = await appointmentServices.getAppointments(type, id)
        res.send(appointments)

    } catch (error) {
        return res.status(500).send(error.message);
    }


}


export default{
    createAppointment,
    getAppointments
}
