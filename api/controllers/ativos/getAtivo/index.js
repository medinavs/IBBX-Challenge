import { db } from "../../../db.js";

export const getAtivos = (_, res) => {
  const q = "SELECT * FROM ativos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
