import appointmentRepositores from "../repositories/appointmentRepositores.js"

async function createAppointment(schedule_id,patient_id){
    const {rowCount, rows} = await appointmentRepositores.findScheduleById(schedule_id)
    if(!rowCount) throw new Error("Not found");
   
    if(rows[0].available !== true)  throw new Error("Not available");

    await appointmentRepositores.createAppointment(patient_id, schedule_id)
}

async function getAppointments(type, id){

const {rows} =  await appointmentRepositores.getAppointments(type, id)

return rows


}






export default{
    createAppointment,
    getAppointments
}