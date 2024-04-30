import express from "express";

import { getAtivos } from "../controllers/ativos/getAtivo/index.js";
import { addAtivo } from "../controllers/ativos/addAtivo/index.js";
import { updateAtivo } from "../controllers/ativos/updateAtivo/index.js";
import { deleteAtivo } from "../controllers/ativos/deleteAtivo/index.js";

const router = express.Router();

router.get("/", getAtivos);
router.post("/", addAtivo);
router.put("/:id", updateAtivo);
router.delete("/:id", deleteAtivo);

export default router;
