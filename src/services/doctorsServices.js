import doctorsRepositores from "../repositories/doctorsRepositores.js"

async function searchDoctor(searchTerm){
    const {rows} = await doctorsRepositores.researchDoctor(searchTerm)

    return rows 

}


export default {
    searchDoctor
}

