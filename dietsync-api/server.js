require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser'); // Para ler cookies

const app = express();
const port = process.env.PORT || 3001;

// Middlewares globais
app.use(express.json()); // Para parsear JSON
app.use(cookieParser()); // Para ler cookies
app.use(
  cors({
    origin: 'http://localhost:3000', // Front-end que vai consumir a API
    credentials: true,               // Obrigatório para cookies cross-site
  })
);

// Importar Swagger
const { swaggerUi, swaggerDocs } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Swagger rodando em http://localhost:${port}/api-docs`);
});
