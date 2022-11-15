const { Router } = require('express');
const modelTest = require('../models/Test')
const mongoose = require('mongoose');
const { returnHello } = require('../controllers/test');

const router = Router();



router.get('/', (req, res) => {
    res.send('Hello World!')
})



router.get('/algo', (req, res) => {
    res.send('aca estoy')
})


router.post('/agregar', async (req, res) => {
    try {
        const { firstName } = req.query
        await modelTest.create({ firstName })
        res.send('Se agrego Correctamente')
    } catch (err) {
        res.send(`No anduvo la query ${err}`)
        console.log('No anduvo la query')
    }
})






module.exports = router