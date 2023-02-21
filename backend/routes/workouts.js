const express = require("express")

const Workout = require("../models/Workout")

const router = express.Router()

// GET all workouts
router.get("/", (req, res) => {})

// GET a single workout
router.get("/:id", (req, res) => {})

// POST a new workout
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps })

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// DELETE a workout
router.delete("/:id", (req, res) => {})

// UPDATE a workout
router.patch("/:id", (req, res) => {})

module.exports = router