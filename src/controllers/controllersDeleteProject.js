const projects = require('../models/project')

const deleteTheProject = async (id) => {
    try {
      const result = await projects.findByIdAndDelete(id);
      return result
    } catch (error) {
      throw new Error("No se encontró resultado");
    }
  };
  
  module.exports = deleteTheProject;