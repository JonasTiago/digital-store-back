import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/users", usersRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });

export default app;
