// Funções de alta ordem
// É uma função que recebe outra funções
// como parâmetro. Paradigma funcional.

// Para passar o código, não use parâmetros.
// Nõa estou chamando a função, mas sim, usando seu código.
console.log("Realizando uma operação...\n");
function calcular(a, b, op) {
  // A função calcular disponibiliza os parâmetros "A" e "B", e a função "OP"
  // como parâmetros para serem utilizados em seu código.
  // Assim, eu uso uma variável para monto a função "OP" usando "A" e "B" como seus parâmetros.

  const resultado = op(a, b); // Veja que esta linha não possui a construção de uma função, 
  // apenas a sua chamada. Assim, para ser executada, ela deve ser construída em outro ponto do programa.

  return resultado;
}

// hi-order functions é um tipo de executor de funções

// aqui eu construo as estruturas de somar e subtrair para serem
// inseriadas, uma a cada chamda, dentro da função "OP" que está em calcular.
let somar = function (x, y) {
  return x + y;
};

let subtrair = function (x, y) {
  return x - y;
};

let a = calcular(6, 5, somar);
let b = calcular(6, 5, subtrair);

console.log(a + " + " + b + " = " + (a + b));

// Agora eu vou passar uma função anônima em uma hi-order funtion.
// Ou seja, passar o código da função anônima como um parâmetro.
let c = calcular(8, 4, function (x, y) {
  return x * y;
});
// Neste caso, os valores 8 e 4 serão utilizados na estrutura "OP"
// de caculcar para executar a multiplicação que também foi enivada por parâmetro.

console.log("Calc de 8 e 4: " + c);

// continuar com o foreach
