const express = require("express");
const router = express.Router();
const dietasController = require("../controllers/dietas.controller");
const verifyToken = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Dietas
 *   description: Gerenciamento de dietas dos usuários
 */

/**
 * @swagger
 * /dietas:
 *   get:
 *     summary: Lista todas as dietas
 *     tags: [Dietas]
 *     responses:
 *       200:
 *         description: Lista de dietas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", verifyToken, dietasController.getDietas);

/**
 * @swagger
 * /dietas/{id}:
 *   get:
 *     summary: Retorna uma dieta específica pelo ID
 *     tags: [Dietas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da dieta
 *     responses:
 *       200:
 *         description: Dieta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_dieta:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 tipo_dieta:
 *                   type: string
 *                 calorias:
 *                   type: number
 *                 proteinas:
 *                   type: number
 *                 carboidratos:
 *                   type: number
 *                 gorduras:
 *                   type: number
 *                 data:
 *                   type: string
 *                   format: date
 *                 refeicao:
 *                   type: string
 *                 quantidade:
 *                   type: number
 *                 alimentos:
 *                   type: string
 *                 observacoes:
 *                   type: string
 *       404:
 *         description: Dieta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro interno no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/:id", verifyToken, dietasController.getDietaByUser);

/**
 * @swagger
 * /dietas:
 *   post:
 *     summary: Cria uma nova dieta
 *     tags: [Dietas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome_dieta
 *               - tipo_dieta
 *               - data
 *             properties:
 *               nome_dieta:
 *                 type: string
 *               tipo_dieta:
 *                 type: string
 *               calorias:
 *                 type: number
 *               proteinas:
 *                 type: number
 *               carboidratos:
 *                 type: number
 *               gorduras:
 *                 type: number
 *               data:
 *                 type: string
 *                 format: date
 *               refeicao:
 *                 type: string
 *               quantidade:
 *                 type: number
 *               alimentos:
 *                 type: string
 *               observacoes:
 *                 type: string
 *               fk_id_usuario_dieta:
 *                 type: integer
 *                 description: ID do usuário (opcional, default 40)
 *     responses:
 *       200:
 *         description: Dieta criada com sucesso
 *       500:
 *         description: Erro ao criar dieta
 */
router.post("/", verifyToken, dietasController.createDieta);

/**
 * @swagger
 * /dietas/excluir/{id}:
 *   delete:
 *     summary: Deleta uma dieta
 *     tags: [Dietas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da dieta
 *     responses:
 *       200:
 *         description: Dieta excluída com sucesso
 *       404:
 *         description: Dieta não encontrada
 */
router.delete("/excluir/:id", verifyToken, dietasController.deleteDieta);

module.exports = router;
