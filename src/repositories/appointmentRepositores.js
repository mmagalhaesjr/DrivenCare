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


export default{
    createAppointment,
    findScheduleById
}