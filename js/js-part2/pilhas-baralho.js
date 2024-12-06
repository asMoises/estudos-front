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
let opt = "";

function criaLista(cartas) {
  return (
    "Ordem de Atendimento:\n\n" +
    cartas.map((carta, index) => `${index + 1}° ${carta}`).join("\n")
  );
}

do {
  opt = Number(
    prompt(
      "1 - Nova Carta\n2 - Remover Carta\n3 - Consultar Baralho\n\n0 - Sair."
    )
  );
  switch (opt) {
    case 0:
      alert("Saindo...");
      break;
    case 1:
      const newCard = prompt("Digite a carta:");
      if (newCard) {
        cartas.push(newCard.trim());
        alert(cartas);
      } else {
        alert("Carta inválida!");
      }
      break;
    case 2:
      // remover
      const x = cartas.pop();
      alert("Carta: " + x + " apagada!" + "\n" + cartas);
      break;
    case 3:
      alert(cartas);
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (opt !== 0);
