const { Router } = require("express");
const CountriesRouter = require("./CountriesRouter")
const ActivityRouter = require("./ActivityRouter")

const router = Router();

router.use("/countries", CountriesRouter)
router.use("/activity", ActivityRouter )

module.exports = router;
