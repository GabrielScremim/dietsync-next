const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Espera "Bearer TOKEN"
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1]; // Remove "Bearer "

  if (!token) {
    return res.status(401).json({ message: "Token inválido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adiciona info do usuário à requisição
    next(); // Continua para a rota
  } catch (err) {
    return res.status(403).json({ message: "Token expirado ou inválido" });
  }
};

module.exports = verifyToken;
