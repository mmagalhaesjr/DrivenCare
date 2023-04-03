import connectionDb from "../config/database.js";

async function researchDoctor(searchTerm){
    
    return await connectionDb.query(`
    SELECT * FROM (
        SELECT doctors.id, doctors.name, speciality.name as speciality, cities.name AS city, states.name as state
        FROM doctors 
        JOIN speciality
        ON speciality_id = speciality.id
        JOIN cities
        ON location = cities.id
        JOIN states
        ON state_id = states.id
        ) as doc 
        WHERE name ILIKE '%${searchTerm}%'
        OR speciality ILIKE '%${searchTerm}%'
        OR city ILIKE '%${searchTerm}%'
        OR state ILIKE '%${searchTerm}%'
    `)
}

export default{
    researchDoctor
}