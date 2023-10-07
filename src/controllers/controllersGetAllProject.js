const projects = require('../models/project')

const getAllProject = async (title) => {
  
  try {
    // ********************     TITLE     ********************
    if(title){
      const result = await projects.find({
        title: { $regex: title, $options: "i" },
      });
      return result
    }

    // ********************     ALL     ********************
    else{

      const result = await projects.find()
      return result

    }
t
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getAllProject;
