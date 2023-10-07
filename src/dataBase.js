const mongoose = require('mongoose')
require("dotenv").config()

//Conección con la base de datos de mongo atlas

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("connect to mongoDB Atlas"))
.catch((error)=>console.error(error))