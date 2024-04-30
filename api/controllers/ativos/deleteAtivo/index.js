import { db } from "../../../db.js";

export const deleteAtivo = (req, res) => {
  const q = "DELETE FROM ativos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Ativo deletado com sucesso.");
  });
};
