import { db } from "../../../db.js";

export const deleteSensor = (req, res) => {
  const sensorId = req.params.id;

  const q = "DELETE FROM sensores WHERE id = ?";

  db.query(q, [sensorId], (err) => {
    if (err) return res.status(500).json({ error: "Erro ao excluir sensor." });
    return res.status(200).json({ message: "Sensor excluído com sucesso." });
  });
};
