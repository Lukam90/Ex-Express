const express = require("express")
const cors = require("cors")

const app = express()

const corsOptions = {
    origin: "https://localhost:8000"
}

// Middleware

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers

const router = require("./routes/ProductRouter")

app.use("/api/products", router)

// Port

const PORT = process.env.PORT || 8000