const db = require("../config/db");

exports.createDieta = async (req, res) => {
  try {
    const {
      nome_dieta,
      tipo_dieta,
      calorias,
      proteinas,
      carboidratos,
      gorduras,
      data,
      refeicao,
      quantidade,
      alimentos,
      observacoes,
      fk_id_usuario_dieta = 40
    } = req.body;

    const sql =
      `INSERT INTO dietas (nome_dieta, tipo_dieta, calorias, proteinas, carboidratos, gorduras, data_dieta, refeicao, quantidade, alimentos, observacoes,  fk_id_usuario_dieta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
      nome_dieta,
      tipo_dieta,
      calorias,
      proteinas,
      carboidratos,
      gorduras,
      data,
      refeicao,
      quantidade,
      alimentos,
      observacoes,
      fk_id_usuario_dieta
    ]);

    res.json({
      message: "dieta cadastrada com sucesso!",
      userId: result.insertId
    });
  } catch (err) {
    console.error("Erro ao registrar dieta:", err);
    res.status(500).json({ message: "Erro ao inserir dieta." });
  }
}
exports.getDietas = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM dietas");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dietas" });
  }
};

exports.getDietasByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM dietas WHERE fk_id_usuario_dieta = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Dieta não encontrada" });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dieta" });
  }
};

exports.getDietaByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM dietas WHERE id_dieta = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Dieta não encontrada" });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dieta" });
  }
};

exports.deleteDieta = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM dietas WHERE id_dieta = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Dieta não encontrada" });
    }

    res.json({ message: "Dieta excluída com sucesso!" });
  } catch (err) {
    console.error("Erro ao excluir dieta:", err);
    res.status(500).json({ error: "Erro ao excluir dieta" });
  }
}
