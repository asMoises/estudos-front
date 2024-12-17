function exibirElemento(elemento, i, array) {
  console.log({ elemento, i, array });
}

const lista = ["Abacate", "Mamão", "Limão", "Laranja"];

for (i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

console.log("************************")

lista.forEach(exibirElemento)
