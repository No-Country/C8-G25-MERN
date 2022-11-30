const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')
const routesTurno = require("./routes/turnos.js");
const routeCanchas =require('./routes/canchas')


///// Creo la App /////
const app = express();
app.use(cors());

app.name = "Alquiler de canchas";
///// App use
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///// Rutas
app.use("/turnos", routesTurno);
app.use("/canchas", routeCanchas);

module.exports = app;
