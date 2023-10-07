const express = require('express')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes/index")
const morgan = require('morgan')
require("dotenv").config()

//Inicializando
const app = express()

// Configuración
app.set('port', process.env.PORT || 3000)


// Configuración del servidor de NODE
app.name = "API"
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

  // Middlewares
app.use(express.urlencoded({extended:false})) // Sirve para que la aplicación Express analice automáticamente los datos enviados en un formulario HTML cuando el cliente realiza una solicitud POST.
app.use(morgan('dev'));
app.use(express.json())

// MIDDLEWARE DE MANEJO DE ERRORES
//TODO--> "este  se utiliza para capturar errores en una aplicación Node.js y responder con una respuesta de error adecuada, 
//TODO     incluyendo el código de estado HTTP y el mensaje de error."
//TODO--> OJO: ": La falta de manejo de errores adecuado puede exponer detalles sensibles o internos de la aplicación al cliente, lo que podría ser un riesgo de seguridad."

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


// Routes
app.use('/',routes)


module.exports = app