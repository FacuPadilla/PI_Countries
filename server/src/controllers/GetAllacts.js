const {Activity, Country} = require("../db");

const GetAllacts = async ()=> {

    const Act = await Activity.findAll({
        include: [
            {
                model:Country,
                through: "Country_Activity"
            }
        ]
    })

    return [...Act]

}

module.exports = {GetAllacts}