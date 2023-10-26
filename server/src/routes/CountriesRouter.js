const { Router } = require('express');
const {GetCountries} = require("../handlers/GetCountries")
const {CountryID} = require("../handlers/CountryID")
const {CountryName} = require("../handlers/CountryName")

const CountriesRouter = Router();


CountriesRouter.get("/",GetCountries)
CountriesRouter.get("/search", CountryName )
CountriesRouter.get("/:id", CountryID)



module.exports = CountriesRouter