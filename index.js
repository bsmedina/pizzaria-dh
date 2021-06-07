const express = require("express");
const { v4 } = require("uuid"); // serve para gerar id aleatorios, o v4 é uma função interna que executa o codigo
const fs = require("fs");
// const uuid = require('uuid');

const app = express();

app.use(express.json());

const pizzas = require("./database/pizzas.json");

app.get("/pizzas", (req, res) => res.json(pizzas));

//Criar uma rota para registrar uma nova pizza, utilizem o método http correto, adicione no array de pizzas e retorne essa nova pizza como json.
app.post("/pizzas", (req, res) => {
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
});

//atualizar pizzas
app.put("/pizzas/:id", (req, res) => {
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
});

//Desafio - Criar uma rota para deletar uma pizza e recebendo como parâmetro da rota o id da pizza. Retorne status 204
app.delete("/pizzas/:id", (req, res) => {
  const {id} = req.params;

  const index = pizzas.findIndex((pizza) => pizza.id === id);
  console.log(index)

  pizzas.splice(index, 1); //remove 1 elemento do index

  res.status(204).send();
});

// const adicionarPizza = function (sabor, categoria, preco) {
//   const pizzaNova = {
//     id: pizzas[pizzas.length - 1].id + 1,// Nessa parte do array.[item.lenth-1] nos mostra o index do objeto, para descobrirmos qual numero é , e assim podermos somar +1 para o nvo obj que está sendo criado.
//     sabor,
//     categoria,
//     preco,
//   };

//   pizzas.push(pizzaNova);

//   console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
// };

// Desafio criar uma função e procurar uma pizza pelo nome - USAR O MÉTODO FIND
/*const buscarPizzas = (sabor) => {
  const pizzaEncontrada = pizzas.find(pizza => pizza.sabor == sabor)

  if (!pizzaEncontrada){
    return `A pizza ${sabor} não foi encontrada!`
  }

  return pizzaEncontrada;
};*/

app.listen(3000, () => console.log("O servidor ta on!!!11!!!!"));