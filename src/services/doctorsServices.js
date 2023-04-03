import doctorsRepositores from "../repositories/doctorsRepositores.js"

async function searchDoctor(searchTerm) {
    const { rows } = await doctorsRepositores.researchDoctor(searchTerm)

    return rows

}

async function getDoctorSchedule(id) {
        const {rowCount} = await doctorsRepositores.findDoctorById(id);
        if(!rowCount)  throw new Error("No result for this search");

        const {rows } = await doctorsRepositores.getDoctorSchedule(id);
        return rows


}


export default {
    searchDoctor,
    getDoctorSchedule
}

