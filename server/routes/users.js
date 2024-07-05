const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/users");

// POST /signup
router.post('/signup', (req, res) => {
  const { name, mail, password } = req.body;

  signup(name, mail, password)
    .then(result => {
      if (result.success) {
        res.status(200).json({ message: 'Signup successful!' });
      } else {
        res.status(400).json({ error: result.error });
      }
    })
    .catch(error => {
      console.error('Signup Error:', error.message);
      res.status(500).json({ error: 'Internal server error.' });
    });
});

// POST /login
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const result = await login(mail, password);
    if (result.success) {
      res.status(200).json({
        message: "Login successful",
        token: result.token,
        user: result.user,
      });
    } else {
      res.status(401).json({ error: result.error });
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
