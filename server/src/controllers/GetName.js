const {Country} = require("../db");
const { Op } = require('sequelize');


const GetName = async (name) => {

    // el Op.iLike sirve para buscar independientemente de mayuscula o minuscula y % representa un caracter comodin
    const CountryName = await Country.findAll(
        {where:
             {name:
                {
        [Op.iLike]: `%${name}%`
      }
     }
    }
    )


        if(CountryName.length > 0) {
            return CountryName
        } else {
            return [`no existe el pais ${name}`]
        }

}

module.exports = {GetName}