import { db } from "../../../db.js";

export const updateSensor = (req, res) => {
  const q = "UPDATE sensores SET `sensor` = ?, `data` = ? WHERE `id` = ?";

  const values = [req.body.sensor, req.body.data];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Sensor atualizado com sucesso.");
  });
};
