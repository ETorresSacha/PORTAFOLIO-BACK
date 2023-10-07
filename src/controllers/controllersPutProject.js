const projects = require('../models/project')


const putTheProject = async (id,body) => {

  try {
    const result = await projects.findOneAndUpdate( { _id: id },body,{ new: true });
    await result.save();

  return result
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = putTheProject;