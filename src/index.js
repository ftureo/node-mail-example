const express = require('express')
const app = express()
const path = require('path')
const PORT = 4000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(require('./routes/index'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>{
    console.log(`App is running in port ${PORT}`)
})