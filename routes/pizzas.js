const express = require("express");
const router = express.Router();

const PizzaController = require("../controllers/PizzaController");

router.get("/", PizzaController.listar); // Rota para listar todas as pizzas.

//Criar uma rota para registrar uma nova pizza, utilizem o método http correto, adicione no array de pizzas e retorne essa nova pizza como json.
router.post("/", PizzaController.criarUmaPizza);

//atualizar pizzas
router.put("/:id", PizzaController.editarUmaPizza);

//Desafio - Criar uma rota para deletar uma pizza e recebendo como parâmetro da rota o id da pizza. Retorne status 204
router.delete("/:id", PizzaController.deletarUmaPizza);