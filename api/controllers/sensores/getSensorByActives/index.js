import { db } from "../../../db.js";

export const getSensoresDoAtivo = (req, res) => {
  const ativoId = req.params.id;

  const q = "SELECT * FROM sensores WHERE ativo_id = ?";

  db.query(q, [ativoId], (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao buscar sensores do ativo." });
    return res.status(200).json(data);
  });
};
