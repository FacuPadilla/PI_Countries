const {Country} = require("../db");
const {GetName} = require("../controllers/GetName");

const CountryName = async (req, res) => {
    try {
        const {name} = req.query;
    
        const response = await GetName(name)
        console.log(name)
    
    
        res.status(202).json(response)
            
            
            
        } catch (error) {
            res.status(402).json({error: error.message})
        }


}

module.exports = {CountryName}