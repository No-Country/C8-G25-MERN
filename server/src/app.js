const { Router } = require('express');
const express = require('express');



const app = express()
const route = Router()




app.get('/', (req, res) => {
    res.send('Hello World!')
})







module.exports = app;