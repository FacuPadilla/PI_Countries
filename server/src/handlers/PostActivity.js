const {CreateAct} = require("../controllers/CreateAct")

const PostActivity = async (req, res) => {
    const {name, Dificultad, Duracion, Temporada, paises } = req.body;
    try {
        const response = await CreateAct(name, Dificultad, Duracion, Temporada, paises)
         res.status(204).json(response)
           
    } catch (error) {
        res.status(404).json({error: error.message})
    }

}
module.exports = {PostActivity}