const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/test.js')
const routesTurno = require('./routes/turnos.js')




///// Creo la App /////
const app = express()



app.name = 'Alquiler de canchas';

///// App use 


///// Rutas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/turnos', routesTurno);
app.use('/test', routes);










module.exports = app;