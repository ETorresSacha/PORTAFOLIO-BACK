const projects = require('../models/project')

const postTheProject = async ({title,description,image,video,links}) => {

  try {

    if(!title || !description || !image || !video || !links) throw new Error("Faltan completar los datos correctamente")
    
    else{
      const resultNewClothes = new projects({title,description,image,video,links})
      await resultNewClothes.save()
      return resultNewClothes
  }

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postTheProject;
