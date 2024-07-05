const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/auth');
const db = require('../models/db');

const signup = async (name, email, password) => {
  try {
    const connection = await db.getConnection();
    const username = email.match(/^([^@]+)/)[1];
    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.query(
      "INSERT INTO users (Name, UserName, Email, Password) VALUES (?, ?, ?, ?)",
      [name, username, email, hashedPassword]
    );
    connection.release();
    return { success: true };
  } catch (error) {
    console.error("Signup Error:", error.message);
    if (error.code === "ER_DUP_ENTRY") {
      return { error: "Email address is already registered." };
    }
    return { error: "Internal server error." };
  }
};

async function login(email, password) {
  try {
    const connection = await db.getConnection();
    const result = await connection.query(
      'SELECT * FROM users WHERE Email = ?',
      [email]
    );
    const user = result[0][0];
    connection.release();

    if (!user) {
      return { error: 'Incorrect email or password.' };
    }
    const isPasswordValid = await bcrypt.compare(password, user.Password);

    if (isPasswordValid) {
      const token = generateToken(user);
      return { success: true, token, user };
    } else {
      return { error: 'Incorrect email or password.' };
    }
  } catch (error) {
    console.error('Login Error:', error.message);
    return { error: 'Internal server error.' };
  }
}

module.exports = { signup, login };
