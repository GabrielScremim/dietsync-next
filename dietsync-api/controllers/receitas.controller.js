const db = require("../config/db");

exports.createReceita = async (req, res) => {
  try {
    const {
      nome_receita,
      ingredientes,
      modo_preparo,
      calorias,
      proteinas,
      carboidratos,
      gordura,
      fk_id_user_receita = 40,
    } = req.body;

    const sql =
      `INSERT INTO receita (nome_receita, ingredientes, modo_preparo, calorias, proteinas, carboidratos, gordura, fk_id_user_receita) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
      nome_receita,
      ingredientes,
      modo_preparo,
      calorias,
      proteinas,
      carboidratos,
      gordura,
      fk_id_user_receita
    ]);

    res.json({
      message: "receita cadastrado com sucesso!",
      userId: result.insertId
    });
  } catch (err) {
    console.error("Erro ao registrar receita:", err);
    res.status(500).json({ message: "Erro ao inserir receita." });
  }
}

exports.getReceitas = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM receita");
    res.json(results);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar receitas" });
  }
};

exports.getReceitaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query(
      "SELECT * FROM receita WHERE id_receitas = ?",
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }

    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar receita" });
  }
}

exports.updateReceita = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome_receita, ingredientes, modo_preparo, calorias, proteinas, carboidratos, gordura } = req.body;

    // Atualiza a receita
    const [result] = await db.query(
      "UPDATE receita SET nome_receita = ?, ingredientes = ?, modo_preparo = ?, calorias = ?, proteinas = ?, carboidratos = ?, gordura = ? WHERE id_receitas = ?",
      [nome_receita, ingredientes, modo_preparo, calorias, proteinas, carboidratos, gordura, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }

    res.json({ message: "Receita atualizada com sucesso!" });
  } catch (err) {
    console.error("Erro ao atualizar receita:", err);
    res.status(500).json({ error: "Erro ao atualizar receita" });
  }
}

exports.deleteReceita = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM receita WHERE id_receitas = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }

    res.json({ message: "Receita excluída com sucesso!" });
  } catch (err) {
    console.error("Erro ao excluir Receita:", err);
    res.status(500).json({ error: "Erro ao excluir Receita" });
  }
}