const {GetAllacts} = require("../controllers/GetAllacts")

const GetActivities = async (req, res) => {
    try {
        const response = await GetAllacts();
        res.status(200).json(response)
    } catch (error) {
        console.log("hubo un error al encontrat las act ")
      res.status(400).json({error: error.message})
    }

}

module.exports = {GetActivities}