// Banco Simples
let saldo = 1000; // Saldo inicial

function exibirMenu() {
  let opcao;

  do {
    opcao = Number(
      prompt(
        "Escolha uma opção:" +
          "\n1 - Sacar" +
          "\n2 - Depositar" +
          "\n3 - Consultar Extrato" +
          "\n-----------------------" +
          "\n0 - Sair"
      )
    );

    switch (opcao) {
      case 1:
        sacar();
        break;
      case 2:
        depositar();
        break;
      case 3:
        consultarExtrato();
        break;
      case 0:
        alert("Saindo... Obrigado por usar nosso sistema bancário.");
        break;
      default:
        alert("Opção inválida! Tente novamente.");
    }
  } while (opcao !== 0);
}

function sacar() {
  const valor = Number(prompt("Digite o valor que deseja sacar:"));

  if (valor > saldo) {
    alert("Saldo insuficiente!");
  } else if (valor > 0) {
    saldo -= valor;
    alert(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
  } else {
    alert("Valor inválido!");
  }
}

function depositar() {
  const valor = Number(prompt("Digite o valor que deseja depositar:"));

  if (valor > 0) {
    saldo += valor;
    alert(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
  } else {
    alert("Valor inválido!");
  }
}

function consultarExtrato() {
  alert(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
}

// Inicia o programa
exibirMenu();
