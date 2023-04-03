import doctorsServices from "../services/doctorsServices.js"

async function searchDoctor(req, res){
    const {searchTerm} = req.body
   
    try {
        const test = await doctorsServices.searchDoctor(searchTerm)
        return res.send(test).status(200)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default{
    searchDoctor
}