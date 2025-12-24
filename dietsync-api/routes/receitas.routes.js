const express = require("express");
const router = express.Router();
const receitaController = require("../controllers/receitas.controller");
const verifyToken = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Receitas
 *   description: Gerenciamento de receitas
 */

/**
 * @swagger
 * /receitas:
 *   get:
 *     summary: Lista todas as receitas
 *     tags: [Receitas]
 *     responses:
 *       200:
 *         description: Lista de receitas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", verifyToken, receitaController.getReceitas);

/**
 * @swagger
 * /receitas/{id}:
 *   get:
 *     summary: Busca receita por ID
 *     tags: [Receitas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Receita encontrada
 *       404:
 *         description: Receita não encontrada
 */
router.get("/:id", verifyToken, receitaController.getReceitaById);

/**
 * @swagger
 * /receitas:
 *   post:
 *     summary: Cria uma nova receita
 *     tags: [Receitas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_receita: { type: string }
 *               ingredientes: { type: string }
 *               modo_preparo: { type: string }
 *               calorias: { type: number }
 *               proteinas: { type: number }
 *               carboidratos: { type: number }
 *               gordura: { type: number }
 *     responses:
 *       200:
 *         description: Receita criada com sucesso
 */
router.post("/", verifyToken, receitaController.createReceita);

/**
 * @swagger
 * /receitas/editar/{id}:
 *   put:
 *     summary: Atualiza uma receita existente
 *     tags: [Receitas]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               nome_receita: { type: string }
 *               ingredientes: { type: string }
 *               modo_preparo: { type: string }
 *               calorias: { type: number }
 *               proteinas: { type: number }
 *               carboidratos: { type: number }
 *               gordura: { type: number }
 *     responses:
 *       200:
 *         description: Receita atualizada com sucesso
 */
router.put("/editar/:id", verifyToken, receitaController.updateReceita);

/**
 * @swagger
 * /receitas/excluir/{id}:
 *   delete:
 *     summary: Exclui uma receita
 *     tags: [Receitas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Receita excluída com sucesso
 *       404:
 *         description: Receita não encontrada
 */
router.delete("/excluir/:id", verifyToken, receitaController.deleteReceita);

module.exports = router;
