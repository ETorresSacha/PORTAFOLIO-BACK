const { Router } = require("express");
const { getProject, getProjectId, postProject, putProject, deleteProject } = require("../handlers/handlersProjects");

const projectsRoute = Router();

projectsRoute.get("/",getProject)
projectsRoute.get("/:id",getProjectId)
projectsRoute.post("/",postProject)
projectsRoute.put("/:id",putProject)
projectsRoute.delete("/:id",deleteProject)

module.exports = projectsRoute;