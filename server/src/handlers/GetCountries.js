const {GetAllCountries} = require("../controllers/GetAllCountries")


const GetCountries = async (req, res) => {
    try {
        const response = await GetAllCountries();
        res.status(200).json(response)
    } catch (error) {
        console.log("hubo un error ")
      res.status(400).json({error: error.message})
    }
}

module.exports = {GetCountries}