const express = require("express")

const router = express.Router()

// GET all workouts
router.get("/", () => {})

// GET a single workout
router.get("/:id", () => {})

// POST a new workout
router.post("/", () => {})

// DELETE a workout
router.delete("/:id", () => {})

// UPDATE a workout
router.patch("/:id", () => {})

module.exports = router