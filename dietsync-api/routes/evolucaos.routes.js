const express = require("express");
const router = express.Router();
const evolucoesController = require("../controllers/evolucaos.controller");
const verifyToken = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Evoluções
 *   description: Gerenciamento de evoluções dos usuários
 */

/**
 * @swagger
 * /evolucaos:
 *   get:
 *     summary: Lista todas as evoluções
 *     tags: [Evoluções]
 *     responses:
 *       200:
 *         description: Lista de evoluções
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", verifyToken, evolucoesController.getAllEvolucoes);

/**
 * @swagger
 * /evolucaos/usuario/{usuario_id}:
 *   get:
 *     summary: Lista todas as evoluções de um usuário
 *     tags: [Evoluções]
 *     parameters:
 *       - in: path
 *         name: usuario_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de evoluções do usuário
 *       404:
 *         description: Nenhuma evolução encontrada
 */
router.get("/usuario/:usuario_id", verifyToken, evolucoesController.getEvolucoesByUser);

/**
 * @swagger
 * /evolucaos/{id}:
 *   get:
 *     summary: Busca evolução por ID
 *     tags: [Evoluções]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da evolução
 *     responses:
 *       200:
 *         description: Evolução encontrada
 *       404:
 *         description: Evolução não encontrada
 */
router.get("/:id", verifyToken, evolucoesController.getEvolucaoById);

/**
 * @swagger
 * /evolucaos:
 *   post:
 *     summary: Cria uma nova evolução
 *     tags: [Evoluções]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - data
 *               - peso
 *               - altura
 *               - cintura
 *             properties:
 *               data:
 *                 type: string
 *                 format: date
 *               peso:
 *                 type: number
 *               altura:
 *                 type: number
 *               cintura:
 *                 type: number
 *               fk_id_evolucaos:
 *                 type: integer
 *                 description: ID do usuário (opcional, default 40)
 *     responses:
 *       200:
 *         description: Evolução criada com sucesso
 *       500:
 *         description: Erro ao criar evolução
 */
router.post("/", verifyToken, evolucoesController.createEvolucao);

/**
 * @swagger
 * /evolucaos/{id}:
 *   delete:
 *     summary: Deleta uma evolução
 *     tags: [Evoluções]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da evolução
 *     responses:
 *       200:
 *         description: Evolução excluída com sucesso
 *       404:
 *         description: Evolução não encontrada
 */
router.delete("/:id", verifyToken, evolucoesController.deleteEvolucao);

module.exports = router;
