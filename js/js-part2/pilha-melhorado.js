let cartas = [];
let opt;

function listarCartas(cartas) {
  if (cartas.length > 0) {
    const texto = cartas.slice().reverse().join("\n");
    alert(`Cartas no baralho:\n${texto}`);
  } else {
    alert("Baralho vazio!");
  }
}

do {
  opt = Number(
    prompt(
      `Escolha uma opção:
1 - Inserir Carta
2 - Remover Carta
3 - Consultar Baralho
0 - Sair`
    )
  );

  switch (opt) {
    case 0:
      alert("Saindo...");
      break;

    case 1: {
      const newCard = prompt("Digite o nome da carta:");
      if (newCard && newCard.trim()) {
        cartas.push(newCard.trim());
        alert(`Carta "${newCard.trim()}" inserida!`);
      } else {
        alert("Entrada inválida! Tente novamente.");
      }
      break;
    }

    case 2:
      if (cartas.length > 0) {
        const removida = cartas.pop();
        alert(`Carta "${removida}" removida!`);
      } else {
        alert("Baralho vazio!");
      }
      break;

    case 3:
      listarCartas(cartas);
      break;

    default:
      alert("Opção inválida! Escolha novamente.");
      break;
  }
} while (opt !== 0);
