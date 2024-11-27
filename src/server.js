import http from "http";
import app from "./app.js";
import connection from "./config/db.js";
import "./config/syncforce.js";

connection
  .authenticate()
  .then(async () => {
    console.log("Conexão com o banco de dados bem-sucedida!");

    const server = http.createServer(app);

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });
