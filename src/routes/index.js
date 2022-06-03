const { Router } = require('express')
const router = Router()

router.post('send-email', (req, res) => {
    console.log("Body", req.body)
    res.send("received")
})

module.exports = router