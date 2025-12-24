const db = require("../config/db");

exports.createTreino = async (req, res) => {
  try {
    const {
      data,
      tipo,
      exercicios,
      repeticoes,
      series,
      objetivo,
      duracao,
      frequencia,
      nome_treino,
      dia_treino,
      fk_id_usuario_treino = 40,
    } = req.body;

    const sql =
      `INSERT INTO treino (data, tipo, exercicios, repeticoes, series, objetivo, duracao, frequencia, nome_treino, dia_treino, fk_id_usuario_treino) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
      data,
      tipo,
      exercicios,
      repeticoes,
      series,
      objetivo,
      duracao,
      frequencia,
      nome_treino,
      dia_treino,
      fk_id_usuario_treino
    ]);

    res.json({
      message: "treino cadastrado com sucesso!",
      userId: result.insertId
    });
  } catch (err) {
    console.error("Erro ao registrar treino:", err);
    res.status(500).json({ message: "Erro ao inserir treino." });
  }
}

exports.getTreinos = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM treino");
    res.json(results);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar treinos" });
  }
};

exports.getTreinosByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM treino WHERE fk_id_usuario_treino = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Treino não encontrado" });

    res.json(results);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar treinos do usuário" });
  }
};

exports.getTreinoByUser = async (req, res) => {
  try {
    const { id, id_treino } = req.params;
    const [results] = await db.query("SELECT * FROM treino WHERE fk_id_usuario_treino = ? AND id = ?", [id, id_treino]);

    if (results.length === 0) return res.status(404).json({ message: "Treino não encontrado" });

    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar treino" });
  }
};

exports.updateTreino = async (req, res) => {
  try {
    const { id, id_treino } = req.params;
    const {
      data,
      tipo,
      nome_treino,
      exercicios,
      repeticoes,
      series,
      objetivo,
      duracao,
      frequencia
    } = req.body;

    const [result] = await db.query(
      `UPDATE treino 
       SET data = ?, tipo = ?, nome_treino = ?, exercicios = ?, 
           repeticoes = ?, series = ?, objetivo = ?, duracao = ?, frequencia = ?
       WHERE id = ? AND fk_id_usuario_treino = 40`,
      [data, tipo, nome_treino, exercicios, repeticoes, series, objetivo, duracao, frequencia, id_treino, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Treino não encontrado para este usuário" });
    }

    res.json({ message: "Treino atualizado com sucesso!" });
  } catch (err) {
    console.error("Erro ao atualizar treino:", err);
    res.status(500).json({ error: "Erro ao atualizar treino" });
  }
}

exports.deleteTreino = async (req, res) => {
  try {
    const { id_usuario, id } = req.params;
    const [result] = await db.query("DELETE FROM treino WHERE fk_id_usuario_treino = ? AND id = ?", [id_usuario, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Treino não encontrada" });
    }

    res.json({ message: "Treino excluída com sucesso!" });
  } catch (err) {
    console.error("Erro ao excluir treino:", err);
    res.status(500).json({ error: "Erro ao excluir treino" });
  }
}