const mongoose = require("mongoose")
const {Schema} = mongoose

const projectSchema = new Schema({
    title:{
        type: String,
        requered: true
    },
    description:{
        type: String,
        requered: true
    },
    image:{
        type: [String],
        requered: true
    },
    video:{
        type: String,
        requered: true
    },
    links:{
        type: [String],
        requered: true
    }
})

const Project = mongoose.model("Project",projectSchema)
module.exports = Project