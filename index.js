const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const PORT = 9000

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/api/person', (req,res) => {
    let persons = {
        "persons": [
            {
                "firstname": "Jan Erik",
                "lastname": "Egge",
                "age": 28,
                "sex": "male"
            },
            {
                "firstname": "Andreas",
                "lastname": "Jacobsen",
                "age": 26,
                "sex": "male"
            }
        ]
    }
    res.send(persons)
})

app.listen(PORT, (err) => {
    if(err){
        console.log("Could not connect to server")
    }
    console.log(`Listening to port: ${PORT}`)
})