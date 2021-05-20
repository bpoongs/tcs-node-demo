const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')

mongoose.connect(
    'mongodb://mongo-db:27017/taskManager',
    //'mongodb://localhost:27017/taskManager',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/tasks', taskRoutes)
app.use('/', userRoutes)

module.exports = app