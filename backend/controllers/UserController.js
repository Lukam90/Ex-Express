const User = require("../models/User")

// Login user
const loginUser = async (req, res) => {
    
}

// Signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        res.status(200).json({ email, password })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser }