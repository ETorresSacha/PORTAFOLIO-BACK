const { Router} = require("express")
const projectsRoute = require('./projectsRoutes')

const router =  Router()

router.use("/projects",projectsRoute )

module.exports = router;