const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { id: user.id, nome: user.name, email: user.email },
      process.env.JWT_SECRET, // Use uma chave secreta para assinar o token (geralmente definida em .env)
      { expiresIn: '1h' } // Definindo o tempo de expiração do token (1 hora aqui)
    );

    res.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        nome: user.name,
        email: user.email
      },
      token: token // Enviando o token gerado para o cliente
    });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ message: "Erro no login" });
  }
}