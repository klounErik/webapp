const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 3000

app.use(cors())

app.get('/api/person', (req, res) => {
    let person = {
        "first_name": "Jan Erik",
        "last_name": "Egge",
        "age": 28,
        "sex": "Male"
    }
    res.send(person)
})

app.listen(PORT, (err) => {
    if(err){
        console.log("Could not connect to server")
    }
    console.log(`Listening to port: ${PORT}`)
})
