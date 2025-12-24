require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Importar Swagger
const { swaggerUi, swaggerDocs } = require("./swagger");

// Rota para acessar a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());

const port = process.env.PORT || 3001;

// Importar rotas
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/users.routes");
const receitaRoutes = require("./routes/receitas.routes");
const evolucaoRoutes = require("./routes/evolucaos.routes");
const treinoRoutes = require("./routes/treinos.routes");
const dietaRoutes = require("./routes/dietas.routes");

// Usar rotas
app.use("/", authRoutes);
app.use("/usuarios", userRoutes);
app.use("/receitas", receitaRoutes);
app.use("/evolucaos", evolucaoRoutes);
app.use("/treinos", treinoRoutes);
app.use("/dietas", dietaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Swagger rodando em http://localhost:${port}/api-docs`);
  
});
