const { Router } = require('express');



const router = Router();



router.get('/algo', (req, res) => {

    res.send('Hello World!')
})

module.exports = router