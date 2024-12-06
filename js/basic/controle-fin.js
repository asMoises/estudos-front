// Controle Financeiro

// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível.
// Mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro.
// E uma opção de sair.
// Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu
// com a quantidade de dinheiro e as opções.
// A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor.A opção de sair deve encerrar o programa.

let saldo = 0;
let opt = "";

do {
  opt = parseFloat(
    prompt(
      "O saldo inicial da sua conta é R$ " +
        saldo +
        ".\n\nDigite:\n1 - Deposito.\n2 - Saque.\n\n0 - Sair."
    )
  );

  switch (opt) {
    case 0:
      alert("Você saiu!\n\nAté logo!");
      break;
    case 1:
      saldo =
        saldo +
        parseFloat(prompt("TELA DE DEPOSITO\n\nDigite o valor do depósito:"));
      break;
    case 2:
      if (saldo <= 0) {
        alert("SALDO INSUFICIENTE.\n\nFAÇA UM NOVO DEPÓSITO!");
      } else {
        let saque = parseFloat(
          prompt(
            "TELA DE SAQUE\nSALDO ATUAL: " +
              saldo +
              "\n\nDIGITE O VALOR DO SAQUE:"
          )
        );
        if (saldo - saque >= 0) {
          saldo = saldo - saque;
        } else {
          alert("SALDO INSUFICIENTE!");
        }
      }
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
} while (opt !== 0);
