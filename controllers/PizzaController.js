const pizzas = require("./database/pizzas.json");
const { v4 } = require("uuid"); // const uuid = require('uuid'); // serve para gerar id aleatorios, o v4 é uma função interna que executa o codigo
const fs = require("fs"); 

const PizzaController = {
    listar: (req, res) => res.json(pizzas);

    criarUmaPizza: (req, res) => {
        const { sabor, categoria, preco } = req.body;

        const pizzaNova = {
            id: v4(),
            sabor,
            categoria,
            preco,
        };

        pizzas.push(pizzaNova);

        fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas)); // Serve para escrever a atualização no json que está os dados iniciais

        res.status(201).json(pizzaNova);
    },

    editarUmaPizza: (req, res) => {
        const { id } = req.params;
        const { sabor, categoria, preco } = req.body;

        const pizzaEncontrada = pizzas.find((pizza) => pizza.id === id);

        if (!pizzaEncontrada) {
            return res.status(400).json({ mensagem: "Pizza não encontrada" });
        }

        pizzaEncontrada.sabor = sabor;
        pizzaEncontrada.categoria = categoria;
        pizzaEncontrada.preco = preco;

        fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

        return res.json(pizzaEncontrada);
    },

    deletarUmaPizza: (req, res) => {
        const {id} = req.params;

        const index = pizzas.findIndex((pizza) => pizza.id === id);

        pizzas.splice(index, 1); //remove 1 elemento do index

        res.status(204).send();
    },
};

module.exports = PizzaController;