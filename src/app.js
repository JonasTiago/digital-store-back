import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes.js";
import categoryRouter from "./routes/CategoryRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/v1", userRoutes);
app.use("/v1", categoryRouter);

// Aqui você pode definir as rotas, por exemplo:
// app.use("/users", usersRouter);

export default app;
