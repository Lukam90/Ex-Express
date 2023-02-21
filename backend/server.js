require("dotenv").config()

const express = require("express")

// Express app
const app = express()

// Middleware


// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})