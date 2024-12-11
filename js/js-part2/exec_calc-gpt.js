// Define as funções de cálculo
const calculos = {
  triangulo: ({ base, altura }) => (base * altura) / 2,
  retangulo: ({ base, altura }) => base * altura,
  quadrado: ({ lado }) => lado ** 2,
  trapezio: ({ baseMaior, baseMenor, altura }) =>
    ((baseMaior + baseMenor) * altura) / 2,
  circunferencia: ({ raio }) => 3.14 * raio ** 2,
};

// Exibe o menu e realiza o cálculo
function exibirMenu() {
  let opcao;

  do {
    opcao = Number(
      prompt(
        "Escolha uma opção para calcular:" +
          "\n1 - Área do triângulo" +
          "\n2 - Área do retângulo" +
          "\n3 - Área do quadrado" +
          "\n4 - Área do trapézio" +
          "\n5 - Área da circunferência" +
          "\n------------------------------------" +
          "\n0 - Sair."
      )
    );

    if (opcao >= 1 && opcao <= 5) {
      realizarCalculo(opcao);
    } else if (opcao !== 0) {
      alert("Opção inválida!");
    }
  } while (opcao !== 0);

  alert("Saindo...");
}

// Realiza o cálculo com base na opção escolhida
function realizarCalculo(opcao) {
  let parametros = {};

  switch (opcao) {
    case 1:
      parametros.base = Number(prompt("Entre com o valor da base:"));
      parametros.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calculos.triangulo(parametros));
      break;

    case 2:
      parametros.base = Number(prompt("Entre com o valor da base:"));
      parametros.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calculos.retangulo(parametros));
      break;

    case 3:
      parametros.lado = Number(
        prompt("Entre com o valor de um lado do quadrado:")
      );
      alert("O resultado é: " + calculos.quadrado(parametros));
      break;

    case 4:
      parametros.baseMaior = Number(prompt("Entre com o valor da base maior:"));
      parametros.baseMenor = Number(prompt("Entre com o valor da base menor:"));
      parametros.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calculos.trapezio(parametros));
      break;

    case 5:
      parametros.raio = Number(prompt("Entre com o valor do raio:"));
      alert("O resultado é: " + calculos.circunferencia(parametros));
      break;
  }
}

// Inicia o programa
exibirMenu();
