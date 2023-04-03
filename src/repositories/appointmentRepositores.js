import connectionDb from "../config/database.js"

async function createAppointment(patient_id, schedule_id){
    await connectionDb.query(`
        INSERT INTO appointments(patient_id, schedule_id) VALUES($1,$2)
    `,[patient_id, schedule_id])

    await connectionDb.query(`
    UPDATE schedule SET available = false WHERE id = $1`, [schedule_id])
}

async function findScheduleById(id){

    return await connectionDb.query(`
        SELECT * FROM  schedule WHERE id = $1
    `,[id])
    
}

async function getAppointments(type, id){
return await connectionDb.query(`
SELECT appointments.id, appointments.patient_id, appointments.confirmed, schedule.doctor_id, schedule.date, doctors.id as doctor_id, doctors.name, speciality.name as speciality
FROM appointments
JOIN schedule
ON schedule_id = schedule.id
JOIN doctors
ON doctor_id = doctors.id
JOIN speciality 
ON speciality_id = speciality.id
WHERE ${type}_id = $1
`, [id])
}

export default{
    createAppointment,
    findScheduleById,
    getAppointments
}