const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const {
      name,
      surname,
      meta,
      sexo,
      data_nasc,
      peso,
      altura,
      email,
      password
    } = req.body;

    if (!name || !surname || !email || !password) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (name, sobrenome, meta, sexo, data_nasc, peso, altura, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [
      name,
      surname,
      meta,
      sexo,
      data_nasc,
      peso,
      altura,
      email,
      hashedPassword
    ]);

    res.json({
      message: "Usuário cadastrado com sucesso!",
      userId: result.insertId
    });
  } catch (err) {
    console.error("Erro ao registrar usuário:", err);
    res.status(500).json({ message: "Erro ao inserir usuário." });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM users");
    res.json(results);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar dados" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM users WHERE id = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });

    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuário" });
  }
};
