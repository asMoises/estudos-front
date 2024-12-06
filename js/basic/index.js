//Escreva um programa em javascript que peça o nome de um turista
// pergunte se ele já visitou alguma cidade.
//Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável,
//e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não.No fim,
//o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

/*
let name_city = "";
let cities = "";
let visitant = prompt("Olá, turista!\nDigite o seu nome: ");

cities = prompt(
  "Você já visitou alfguma cidade? Digite:\n\n0 para Não\n1 para Sim"
);
cities = parseFloat(cities);

if (cities == 1) {
  name_city = name_city + " " + prompt("Entre com o nome da cidade: ");

  while (cities == 1) {
    cities = prompt(
      "Você visitou outras cidades? Digite:\n\n0 para Não\n1 para Sim"
    );
    cities = parseFloat(cities);
    if (cities == 1) {
      name_city = name_city + ", " + prompt("Entre com o nome da cidade: ");
    }
  }
  alert(visitant + ", aqui a lista de cidades visitadas:\n" + name_city);
} else {
  alert("Você não visitou nenhuma cidade ainda!");
}

*/

// ******************** Versão GPT
let citiesVisited = [];
let visitor = prompt("Olá, turista!\nDigite o seu nome: ");

let hasVisited = prompt(
  "Você já visitou alguma cidade? Digite:\n\n0 para Não\n1 para Sim"
);

if (parseInt(hasVisited) === 1) {
  do {
    let city = prompt("Digite o nome da cidade que você visitou: ");
    citiesVisited.push(city);

    hasVisited = prompt(
      "Você visitou outras cidades? Digite:\n\n0 para Não\n1 para Sim"
    );
  } while (parseInt(hasVisited) === 1);

  alert(
    `${visitor}, aqui está a lista de cidades visitadas:\n${citiesVisited.join(
      ", "
    )}`
  );
} else {
  alert("Você não visitou nenhuma cidade ainda!");
}
