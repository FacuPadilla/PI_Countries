const axios = require("axios");
const {Country, Activity} = require("../db")

const GetCountryID = async (id) => {

    const findID = await Country.findByPk(id, {
        include: Activity,
        
    })

    if (findID) {
        const activityData = findID.Activities.map((activity) => ({
            name: activity.name,
            Duracion: activity.Duracion,
            Dificultad: activity.Dificultad,
            Temporada: activity.Temporada,
          }));

        


        return {
            id: findID.id,
            name: findID.name,
            capital: findID.capital,
            bandera: findID.bandera,
            continente: findID.continente,
            subregion: findID.subregion,
            area: findID.area,
            poblacion: findID.poblacion,
            activities: activityData,

            

            

        }
    } else {
        return [`no hay pasi con EL ID: ${id}`]
    }




}

module.exports = {GetCountryID}