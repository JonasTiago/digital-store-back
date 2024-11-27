import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(userRoutes);

// Aqui você pode definir as rotas, por exemplo:
// app.use("/users", usersRouter);

export default app;
