// Pilha de Cartas

// Escreva um programa em javascript para simular um baralho de cartas.
// O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho
// e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”.

// Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e
// adicioná - la no topo do baralho.

// Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

// Função para criar um baralho de cartas

let cartas = [];
let opt = 0;
let texto = "";

function Listar(cartas) {
  for (let index = cartas.length - 1; index >= 0; index--) {
    texto = texto + cartas[index] + "\n";
  }
  alert(texto);
  texto = "";
}

do {
  opt = Number(
    prompt(
      "1 - Nova Carta\n2 - Remover Carta\n3 - Consultar Baralho\n\n0 - Sair."
    )
  );
  switch (opt) {
    case 0:
      // sair
      alert("Saindo...");
      break;
    case 1:
      // inserir carta na pilha
      const newCard = prompt("Digite a carta:");
      if (newCard) {
        cartas.push(newCard.trim());
        alert("Carta: " + newCard + " inserida!");
      } else {
        alert("Carta inválida!");
      }
      break;

    case 2:
      // remove cartas
      if (cartas.length > 0) {
        let apagada = cartas.pop();
        alert("Carta: " + apagada + " apagada!");
      } else {
        alert("Baralho vazio!");
      }
      break;

    case 3:
      // consulta cartas
      if (cartas.length > 0) {
        Listar(cartas);
      } else {
        alert("Baralho vazio!");
      }
      break;

    default:
      alert("Opção inválida");
      break;
  }
} while (opt !== 0);
