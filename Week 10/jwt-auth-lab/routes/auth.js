const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Dummy DB (just array, resets when server restarts)
let users = [];

/**
 * REGISTER - Create new user
 */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.json({ message: "User registered successfully" });
});

/**
 * LOGIN - Authenticate and get JWT token
 */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user)
    return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials" });

  // Generate JWT token
  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;