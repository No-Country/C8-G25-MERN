const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const routesTurno = require("./routes/turnos.ts");

///// Creo la App /////
const app = express();

app.name = "Alquiler de canchas";
///// App use
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///// Rutas
app.use("/turnos", routesTurno);

module.exports = app;
