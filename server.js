const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./midleware/errorMidleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const movieRoutes = require('./routes/moviesRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/movies', movieRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

