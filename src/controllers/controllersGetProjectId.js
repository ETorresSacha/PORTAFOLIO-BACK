const projects = require('../models/project')

const ProjectId = async (id) => {
  
  try {
    // ********************     ID     ********************
    const result = await projects.findById(id)
    return result

  } catch (error) {
    throw new Error("No se encontró ningún resultado");
  }
};

module.exports = ProjectId;
