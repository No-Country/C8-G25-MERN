const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js')

///// Creo la App /////
const app = express()



app.name = 'Alquiler de canchas';

///// App use 
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(bodyParser.json({ limit: '50mb' }));


///// Rutas
app.use('/turnos', routes);












module.exports = app;