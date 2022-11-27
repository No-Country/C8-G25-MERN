<<<<<<< HEAD
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
=======
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/test.js')
const routesTurno = require('./routes/turnos.js')




///// Creo la App /////
const app = express()
app.use(express.json())
app.use('/', require("./routes/index.js"))
app.name = 'Alquiler de canchas';

///// App use 
app.use(morgan('dev'))

///// Rutas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/turnos', routesTurno);
app.use('/test', routes);










module.exports = app;
>>>>>>> parent of a3acc1e (Se instalo typscript se cambio formato)
