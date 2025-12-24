const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configurações básicas
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Fitness",
      version: "1.0.0",
      description: "API para gerenciamento de usuários, receitas, treinos, dietas e evoluções",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor local"
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.routes.js"], // arquivos com Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
