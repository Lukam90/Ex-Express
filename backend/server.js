require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const workoutRoutes = require("./routes/workouts")

// Express app
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/api/workouts", workoutRoutes)

// Connect to DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Listening on port", process.env.PORT)
        })
    })
    .catch(error => {
        console.log(error)
    })
