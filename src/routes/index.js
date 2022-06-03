const { Router } = require('express')
const router = Router()

router.post('/send-email', (req, res) => {
    console.log("Body", req.body)
    const { name, email, phone, message } = req.body

    contentHTML=`
    <h1>User Information</h1>
    <ul>
        <li>Name: ${name}</li>
        <li>email: ${email}</li>
        <li>phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `
    console.log(contentHTML)
    res.send("received")
})

module.exports = router