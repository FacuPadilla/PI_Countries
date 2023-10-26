const { Router } = require('express');
const {PostActivity} = require("../handlers/PostActivity")
const {GetActivities} = require("../handlers/GetActivities")

const ActivityRouter = Router()


ActivityRouter.get("/", GetActivities)
ActivityRouter.post("/", PostActivity)


module.exports = ActivityRouter