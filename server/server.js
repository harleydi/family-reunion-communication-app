require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const authRoutes = require('./Auth/authRoutes.js')



const app = express()
const PORT = process.env.PORT || 8000

// Connect Database
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Family Reunion Api')
})

app.use('/auth', authRoutes)



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})