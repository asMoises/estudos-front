// Robô da Tabuada

// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20).
// O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o
// número informado dentro de uma variável do tipo string.Depois o programa deve exibir esses resultados e finalizar.

let fator = prompt("Entre com um número para o cálculo da tabuada: ");
let texto = "";
let resultado = 0;

for (let i = 0; i <= 20; i++) {
  resultado = fator * i;
  texto += fator + " * " + i + " = " + resultado + "\n";
}

alert(texto);

// codigo mais limpo:

const fator2 = Number(
  prompt("Entre com um número para o cálculo da tabuada: ")
);
let texto2 = "";

for (let i = 0; i <= 20; i++) {
  texto2 += `${fator2} * ${i} = ${fator2 * i}\n`;
}

alert(texto2);
