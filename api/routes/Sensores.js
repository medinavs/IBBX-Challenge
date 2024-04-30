import express from "express";

import { getSensores } from "../controllers/sensores/getSensor/index.js";
import { getSensoresDoAtivo } from "../controllers/sensores/getSensorByActives/index.js";
import { addSensor } from "../controllers/sensores/addSensor/index.js";
import { updateSensor } from "../controllers/sensores/updateSensor/index.js";
import { deleteSensor } from "../controllers/sensores/deleteSensor/index.js";

const router = express.Router();

router.get("/", getSensores);
router.get("/search/:id", getSensoresDoAtivo);
router.post("/", addSensor);
router.put("/", updateSensor);
router.delete("/:id", deleteSensor);

export default router;
