const pizzas = require('../database/pizzas.json');

const PizzaModel = {
    findAll: () => {
        //busca e retorna lista com todas as pizzas.
        return pizzas;
    },

    create: (pizza) => {
        pizzas.push(pizzaNova);

        fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas)); // Serve para escrever a atualização no json que está os dados iniciais
    },

    update: (pizza) => {
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
    },

    destroy: () => {
        const {id} = req.params;

        const index = pizzas.findIndex((pizza) => pizza.id === id);

        pizzas.splice(index, 1); //remove 1 elemento do index
    }
};

module.exports = {
    findAll,
    create,
    update,
    destroy
};