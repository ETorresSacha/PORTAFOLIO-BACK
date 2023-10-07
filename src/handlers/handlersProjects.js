const deleteTheProject = require("../controllers/controllersDeleteProject");
const getAllProject = require("../controllers/controllersGetAllProject");
const ProjectId = require("../controllers/controllersGetProjectId");
const postTheProject = require("../controllers/controllersPostProject");
const putTheProject = require("../controllers/controllersPutProject");

//! GET PROJECT
const getProject = async (req, res) => {
  const {title} = req.query

    try {

      // ********************     TITLE     ********************
      if(title){
        const result = await getAllProject(title);
        return result.length ? res.status(200).json(result):res.status(200).json({message:"No se encontró ningún resultado con esa caracteristica"})

      }

       // ********************     ALL     ********************
      else{
        const result = await getAllProject();
        return result.length ? res.status(200).json(result) : res.status(200).json({message:"No se encontró resultado"})

      }
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

   //! GET PROJECT FOR ID
  const getProjectId = async (req, res) => {
    const {id} = req.params
  
      try {
        // ********************     ID     ********************
        if(id){
          const result = await ProjectId(id);
          return result ? res.status(200).json(result) : res.status(200).json({error:"No existe ningún resultado con este Id"})
        }
        
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    };

  //! POST PROJECT
const postProject = async (req, res) => {
    try {
      const result = await postTheProject(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //! PUT PROJECT
const putProject = async (req, res) => {
    const { id } = req.params
    try {
      const result = await putTheProject(id,req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //! DELETE PROJECT
const deleteProject = async (req, res) => {
    const { id } = req.params
    try {
      const result = await deleteTheProject(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  module.exports = {
    getProject,
    getProjectId,
    postProject,
    putProject,
    deleteProject
}