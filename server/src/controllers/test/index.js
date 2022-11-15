

const returnHello = async (req, res) => {
    const info = await modelTest.find({ firstName: 'gonzalo' })
    res.send(info)
}



module.exports = { returnHello }