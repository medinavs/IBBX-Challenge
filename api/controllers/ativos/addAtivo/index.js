import { db } from "../../../db.js";

export const addAtivo = (req, res) => {
  const q = "INSERT INTO ativos(`ativo`, `data`) VALUES(?)";

  const values = [req.body.ativo, req.body.data];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Ativo criado com sucesso.");
  });
};
