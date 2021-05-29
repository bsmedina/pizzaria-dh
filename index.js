const express = require('express');
const app = express();

app.use(express.json());

const pizzas = require("./database/pizzas.json");

app.get("/pizzas", (req, res) => {
    return res.json(pizzas)
});

const adicionarPizza = function(sabor, categoria, preco){
    const pizzaNova = {
        id: pizzas[pizzas.length - 1].id + 1, // Nessa parte do array.[item.lenth-1] nos mostra o index do objeto, para descobrirmos qual numero e é , e assim podermos somar +1 para o nvo obj que está sendo criado.
        sabor,
        categoria,
        preco
    };

    pizzas.push(pizzaNova);
    console.log(`A pizza ${sabor} foi adicionada com sucesso!`)
};

// desafio criar uma função e procurar uma pizza pelo nome - USAR O MÉTODO FIND
const buscarPizzas = (sabor) => {
    const pizzaEncontrada = pizzas.find(pizza => pizza.sabor == sabor)

    if (!pizzaEncontrada){
        return `A pizza ${sabor} não foi encontrada!`
    }

    return pizzaEncontrada;
};

adicionarPizza("Presunto", "Salgada", 25);
adicionarPizza("Catupiry", "Salgada", 40);

console.log(buscarPizzas("Brócolis"));

app.listen(3000, () => console.log('O servidor ta on!!!'));