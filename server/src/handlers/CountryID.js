const {GetCountryID} = require("../controllers/GetCountryID")

const CountryID = async  (req, res)=> {
    const {id} = req.params;
    try {
        

        const response = await GetCountryID(id);
        res.status(201).json(response)
    } catch (error) {
        console.log("hubo un error al encontrar el pais ")
      res.status(401).json({error: error.message})
    }

}

module.exports = {CountryID}