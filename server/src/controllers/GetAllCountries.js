const axios = require("axios")
const {Country} = require("../db")

const GetAllCountries = async ()=> {
 
    const apiCountries = (await axios.get("http://localhost:5000/countries")).data

    for (const country of apiCountries) {

         // Buscar si el país ya existe en la base de datos por su código o cualquier otro identificador único
         const existingCountry = await Country.findOne({ where: { id: country.cca3 } });

         if(!existingCountry){
        await Country.create({
            id: country.cca3,
            name: country.name.common,
            capital: country.capital,
            bandera: country.flags.png,
            continente: country.continents,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population,
        })}
    }

    console.log("paises guardados en la base de datos")

    

    const DbCountries = await Country.findAll();

    return [...DbCountries]
    

    
}

module.exports = {GetAllCountries}