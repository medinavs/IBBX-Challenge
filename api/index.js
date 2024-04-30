import express from "express";
import cors from "cors";
import ativoRoutes from "./routes/Ativos.js";
import SensorRoutes from "./routes/Sensores.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", ativoRoutes);

app.use("/sensores", SensorRoutes);

app.listen(process.env.PORT || 8800);
