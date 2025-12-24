const db = require("../config/db");

// Criar nova evolução
exports.createEvolucao = async (req, res) => {
  try {
    const {
      data,
      peso,
      altura,
      cintura,
      fk_id_evolucaos = 40
    } = req.body;

    const sql =
      `INSERT INTO evolucaos (data, peso, altura, cintura, fk_id_evolucaos) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
      data,
      peso,
      altura,
      cintura,
      fk_id_evolucaos
    ]);

    res.json({
      message: "evloucao cadastrada com sucesso!",
      userId: result.insertId
    });
  } catch (err) {
    console.error("Erro ao registrar evloucao:", err);
    res.status(500).json({ message: "Erro ao inserir evloucao." });
  }
}

// Buscar todas as evoluções de todos os usuários
exports.getAllEvolucoes = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM evolucaos ORDER BY data DESC");
    res.json(results);
  } catch (err) {
    console.error("Erro ao buscar evoluções:", err);
    res.status(500).json({ erro: "Erro ao buscar evoluções" });
  }
};

// Buscar evoluções de um usuário específico
exports.getEvolucoesByUser = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const [results] = await db.query("SELECT * FROM evolucaos WHERE fk_id_evolucaos = ? ORDER BY data DESC", [usuario_id]);

    if (results.length === 0) return res.status(404).json({ message: "Nenhuma evolução encontrada para este usuário" });

    res.json(results);
  } catch (err) {
    console.error("Erro ao buscar evoluções por usuário:", err);
    res.status(500).json({ erro: "Erro ao buscar evoluções" });
  }
};

// Buscar evolução específica por ID
exports.getEvolucaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM evolucaos WHERE id = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Evolução não encontrada" });

    res.json(results[0]);
  } catch (err) {
    console.error("Erro ao buscar evolução:", err);
    res.status(500).json({ erro: "Erro ao buscar evolução" });
  }
};

// Deletar evolução
exports.deleteEvolucao = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM evolucaos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Evolucao não encontrada" });
    }

    res.json({ message: "Evolucao excluída com sucesso!" });
  } catch (err) {
    console.error("Erro ao excluir evolucao:", err);
    res.status(500).json({ error: "Erro ao excluir evolucao" });
  }
}