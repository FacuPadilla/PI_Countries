const { Activity, Country } = require("../db");

const CreateAct = async (name, Dificultad, Duracion, Temporada, paises) => {
    
        // Crea la actividad turística en la base de datos
        const newActivity = await Activity.create({ name, Dificultad, Duracion, Temporada });

        if (paises && paises.length > 0) {
            // Busca los países por id en la base de datos
            const selectedCountries = await Country.findAll({
                where: { id: paises },
                
            });

            // Establece la relación entre la actividad y los países
            await newActivity.addCountries(selectedCountries);

            
        }

        return newActivity;
    
};

module.exports = { CreateAct };