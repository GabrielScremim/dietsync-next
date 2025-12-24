const express = require("express");
const router = express.Router();
const treinosController = require("../controllers/treinos.controller");
const verifyToken = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Treinos
 *   description: Gerenciamento de treinos
 */

/**
 * @swagger
 * /treinos:
 *   get:
 *     summary: Lista todos os treinos
 *     tags: [Treinos]
 *     responses:
 *       200:
 *         description: Lista de treinos
 */
router.get("/", verifyToken, treinosController.getTreinos);

/**
 * @swagger
 * /treinos/usuario/{id}:
 *   get:
 *     summary: Lista todos os treinos de um usuário
 *     tags: [Treinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de treinos do usuário
 *       404:
 *         description: Nenhum treino encontrado
 */
router.get("/usuario/:id", verifyToken, treinosController.getTreinosByUser);

/**
 * @swagger
 * /treinos/usuario/{id}/treino/{id_treino}:
 *   get:
 *     summary: Busca treino específico de um usuário
 *     tags: [Treinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id_treino
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Treino encontrado
 *       404:
 *         description: Treino não encontrado
 */
router.get("/usuario/:id/treino/:id_treino", verifyToken, treinosController.getTreinoByUser);

/**
 * @swagger
 * /treinos:
 *   post:
 *     summary: Cria um novo treino
 *     tags: [Treinos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id: { type: integer }
 *               data: { type: string, format: date }
 *               tipo: { type: string }
 *               nome_treino: { type: string }
 *               exercicios: { type: string }
 *               repeticoes: { type: integer }
 *               series: { type: integer }
 *               objetivo: { type: integer }
 *               duracao: { type: integer }
 *               frequencia: { type: integer }
 *               dia_treino: { type: integer }
 *     responses:
 *       200:
 *         description: Treino criado com sucesso
 */
router.post("/", verifyToken, treinosController.createTreino);

/**
 * @swagger
 * /treinos/usuario/{id}/editar/{id_treino}:
 *   put:
 *     summary: Atualiza um treino existente
 *     tags: [Treinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id_treino
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data: { type: string, format: date }
 *               tipo: { type: string }
 *               nome_treino: { type: string }
 *               exercicios: { type: string }
 *               repeticoes: { type: integer }
 *               series: { type: integer }
 *               objetivo: { type: integer }
 *               duracao: { type: integer }
 *               frequencia: { type: integer }
 *               dia_treino: { type: integer }
 *     responses:
 *       200:
 *         description: Treino atualizado com sucesso
 *       404:
 *         description: Treino não encontrado
 */
router.put("/usuario/:id/editar/:id_treino", verifyToken, treinosController.updateTreino);

/**
 * @swagger
 * /treinos/usuario/{id_usuario}/excluir/{id}:
 *   delete:
 *     summary: Deleta um treino de um usuário
 *     tags: [Treinos]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Treino excluído com sucesso
 *       404:
 *         description: Treino não encontrado
 */
router.delete("/usuario/:id_usuario/excluir/:id", verifyToken, treinosController.deleteTreino);

module.exports = router;
