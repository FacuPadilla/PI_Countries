const {Activity} = require("../db");

const GetAllacts = async ()=> {

    const Act = await Activity.findAll()

    return [...Act]

}

module.exports = {GetAllacts}