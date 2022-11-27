const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/test.js')




///// Creo la App /////
const app = express()
app.use(express.json())
app.use('/', require("./routes/index.js"))
app.name = 'Alquiler de canchas';

///// App use 
app.use(morgan('dev'))

///// Rutas



module.exports = app;