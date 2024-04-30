import { db } from "../../../db.js";

export const getSensores = (_, res) => {
  const q = "SELECT * FROM sensores";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
