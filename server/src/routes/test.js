const express = require('express');
const { PrismaClient } = require('@prisma/client');


const route = express.Router()
const prisma = new PrismaClient()

route.post('/crear-turno', async (req, res) => {


    try {




        const turno = await prisma.Turno.create({
            data: {
                email: 'gonzalopjl222@gmail.com',
                nombre: 'Reserva2',
                play: {
                    connect: { id: 3 }
                },



            }
        })






        res.send(turno)
        await prisma.$disconnect()
    } catch (err) {
        console.log(err)
        res.send(err)
        await prisma.$disconnect()
        process.exit(1)
    }
})


route.get('/turnos', async (qer, res) => {
    try {
        const data = await prisma.Turno.findMany({

          
        })
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})

route.get('/cancha', async (qer, res) => {
    try {



        const data = await prisma.Cancha.findMany({
            include: {
                turnos: true,

            }
        })
        res.send(data)



    } catch (err) {
        res.send(err)
    }
})


module.exports = route