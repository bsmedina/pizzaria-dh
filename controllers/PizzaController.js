const PizzaModel = require('../models/Pizza');

const { v4 } = require("uuid"); // const uuid = require('uuid'); // serve para gerar id aleatorios, o v4 é uma função interna que executa o codigo

const PizzaController = {
    listar: (req, res) => {
        const pizzas = PizzaModel.findAll();
        res.json(pizzas)
    },

    criarUmaPizza: (req, res) => {
        const { sabor, categoria, preco } = req.body;

        const pizzaNova = {
            id: v4(),
            sabor,
            categoria,
            preco,
        };

        PizzaModel.create(pizzaNova);

        res.status(201).json(pizzaNova);
    },

    editarUmaPizza: (req, res) => {
        PizzaModel.update(pizzaEncontrada);

        return res.json(pizzaEncontrada);
    },

    deletarUmaPizza: (req, res) => {
        PizzaModel.destroy;

        res.status(204).send();
    },
};

module.exports = PizzaController;