const express = require('express');
const prisma = require('@prisma/client');

const route = express.Router()


route.get('/',(rec,res)=>{
    res.send('funciona')
})


route.post('/',(rec,res)=>{

    prisma.cancha.create
    res.send('funciona')
})
module.exports = route