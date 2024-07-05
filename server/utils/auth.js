const jwt = require("jsonwebtoken");

function generateToken(user) {
  const token = jwt.sign(
    {
      id: user.UserID,
      email: user.Email,
      Name: user.Name,
      UserName: user.UserName,
    },
    "your_jwt_secret",
    { expiresIn: "1h" }
  );
  return token;
}

module.exports = { generateToken };
