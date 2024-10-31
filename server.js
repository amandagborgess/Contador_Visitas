const express = require("express");
const app = express();
const port = 3000;

// Variável para contar as visitas
let visitCount = 0;

// Rota para contar visitas
app.get("/", (req, res) => {
  visitCount++; // Incrementa o contador
  res.json({ message: `Número de visitas: ${visitCount}` });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
