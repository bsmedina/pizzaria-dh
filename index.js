const pizzas = [
    {
        id: 1,
        sabor: "Quatro queijos",
        categoria: "Salgada",
        preco: 15.89
    },
    {
        id: 2,
        sabor: "Morango com Nutella",
        categoria: "Doce",
        preco: 30
    },
    {
        id: 3,
        sabor: "Brócolis",
        categoria: "Vegetariana",
        preco: 35
    },
    {
        id: 4,
        sabor: "Lombo canadense",
        categoria: "Salgada",
        preco: 25
    },
]

const listarTodasAsPizzas = () => {
    let conteudo = "";

    pizzas.forEach((pizza) => {
        conteudo += `
            Sabor: ${pizza.sabor}
            Categoria: ${pizza.categoria}
            Preço: ${pizza.preco}
        `;
    });
    
    return conteudo;
};

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

//console.log(listarTodasAsPizzas());
console.log(buscarPizzas("Brócolis"));
