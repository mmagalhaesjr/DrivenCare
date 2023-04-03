import doctorsServices from "../services/doctorsServices.js"

async function searchDoctor(req, res) {
    const { searchTerm } = req.body

    try {
        const doctor = await doctorsServices.searchDoctor(searchTerm)
        return res.send(doctor).status(200)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getDoctorSchedule(req, res) {
    const { id } = req.params
    try {
        const schedule = await doctorsServices.getDoctorSchedule(id)
        res.send(schedule)

    } catch (error) {
        return res.status(500).send(error.message);
    }

}

export default {
    searchDoctor,
    getDoctorSchedule
}