// evolução das funções

let op = 0;

// função tradicional
function somar(a, b) {
  return a + b;
}

// Neste caso a variável "op" recebe o resultado da função somar.
op = somar(1, 2);
console.log(op);

// função anônima
op = function (a, b) {
  return a - b;
};
console.log(op(1, 2));

// Neste caso a variável "op" recebe a função somar toda.
op = somar;
console.log(op);

//funções anônomas servem para alterar o comportamento de uma função
//dentro de um sistema.

// Uma função anônima só estárá disposnível apenas após sua
// inicialização.
