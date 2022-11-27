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