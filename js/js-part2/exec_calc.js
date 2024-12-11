// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.

// O programa deve iniciar com um menu contendo as diferentes opções de cálculas.

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
//O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let opt = 0;
let calculador = {};

do {
  opt = Number(
    prompt(
      "Escolha uma opção para calcular: " +
        "\n1 - A área do triângulo." +
        "\n2 - A área retângulo." +
        "\n3 - A área do quadrado" +
        "\n4 - A área do trapézio." +
        "\n5 - A área de uma cirunferência." +
        "\n------------------------------------" +
        "\n0 - Sair."
    )
  );

  switch (opt) {
    case 1:
      // área do triângulo: base * altura / 2
      calculador.base = Number(prompt("Entre com o valor da base:"));
      calculador.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calc_triangulo(calculador));

      break;
    case 2:
      // área do retângulo: base * altura
      calculador.base = Number(prompt("Entre com o valor da base:"));
      calculador.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calc_retangulo(calculador));

      break;
    case 3:
      // área do quadrado: lado²
      calculador.lado = Number(
        prompt("Entre com o valor de um lado do quadrado:")
      );
      alert("O resultado é: " + calc_quadrado(calculador));
      break;
    case 4:
      //  área do trapézio: (base maior + base menor) * altura / 2
      calculador.baseMaior = Number(prompt("Entre com o valor da base maior:"));
      calculador.base = Number(prompt("Entre com o valor da base menor:"));
      calculador.altura = Number(prompt("Entre com o valor da altura:"));
      alert("O resultado é: " + calc_trapesio(calculador));

      break;
    case 5:
      // área do círculo: pi * raio² (considere pi = 3.14)
      calculador.raio = Number(prompt("Entre com o valor do raio:"));
      alert("O resultado é: " + calc_circunf(calculador));
      break;
    case 0:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!s");
      break;
  }
} while (opt !== 0);

// functions

function calc_triangulo(obj) {
  return (obj.base * obj.altura) / 2;
}

function calc_retangulo(obj) {
  return obj.base * obj.altura;
}

function calc_quadrado(obj) {
  return obj.lado * 2;
}

function calc_trapesio(obj) {
  return ((obj.baseMaior + obj.base) * obj.altura) / 2;
}

function calc_circunf(obj) {
  const x = obj.raio * obj.raio;
  return 3.14 * x;
}
