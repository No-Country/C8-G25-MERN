const { Router } = require('express');
const prisma = require('../db')



const route = Router()


route.get('/', async (req, res) => {

    try {
        const canchas = await prisma.cancha.findMany({})
        res.send(canchas)
    } catch (err) {
        res.send(err);
        await prisma.$disconnect();
        process.exit(1);
    }

})



module.exports = route