import { db } from "../../../db.js";

export const addSensor = (req, res) => {
  const { ativo_id, tipo, valor } = req.body;

  const q = "INSERT INTO sensores (ativo_id, tipo, valor) VALUES (?, ?, ?)";

  db.query(q, [ativo_id, tipo, valor], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Erro ao adicionar sensor." });
    return res
      .status(200)
      .json({ message: "Sensor adicionado com sucesso.", id: result.insertId });
  });
};
