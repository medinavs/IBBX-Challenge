import { db } from "../../../db.js";

export const updateAtivo = (req, res) => {
  const q = "UPDATE ativos SET `ativo` = ?, `data` = ? WHERE `id` = ?";

  const values = [req.body.ativo, req.body.data, req.body.id];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Ativo atualizado com sucesso.");
  });
};
