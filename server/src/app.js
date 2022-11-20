const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/test.js')




///// Creo la App /////
const app = express()



app.name = 'Alquiler de canchas';

///// App use 


///// Rutas
app.use('/test', routes);












module.exports = app;