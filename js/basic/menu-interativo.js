// Menu Interativo

// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
// O programa deverá iniciar mostrando as 5 opções disponíveis.
// As quatro primeiras não precisam de nenhuma funcionalidade específica.
// A última opção deve ser a opção “Encerrar”.
// Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida.
// Depois o programa deve exibir novamente o menu com as 5 opções.
// Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”.
// Ao escolhê-la, uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let texto =
  "Escolha uma das opções do menu interativo:\n\n1 - Financeiro\n2 - Contabilidade\n3 - Desenvolvimento\n4 - Comercial\n\n0 - Sair";

let opt = parseFloat(prompt(texto));

while (opt != 0) {
  switch (opt) {
    case 1:
      alert("Você está no Dep. Financeiro!");
      break;
    case 2:
      alert("Você está no Dep. de Contabilidade!");
      break;
    case 3:
      alert("Você está no Dep. de Contabilidade!");
      break;
    case 4:
      alert("Você está no Dep. Comerial!");
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
  opt = parseFloat(prompt(texto));
}
