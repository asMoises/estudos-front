// Procurando Palíndromos

// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo.
// Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem.
// O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo.
// Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

let aux = 0;
let palavra = "assa";
let palavra_inv = palavra.split("").reverse().join("");

for (let i = 0; i < palavra.length; i++) {
  if (palavra.charAt(i) != palavra_inv.charAt(i)) {
    alert(palavra + " não é palíndromo de " + palavra_inv);
    aux = 1;
    break;
  }
}

if (aux === 0) {
  alert(palavra + " = " + palavra_inv);
}

// ******** cod melhorado
let palavra2 = "radar";

// Verifica se a palavra é igual à sua reversa
if (palavra2 === palavra2.split("").reverse().join("")) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(palavra + " não é um palíndromo.");
}
