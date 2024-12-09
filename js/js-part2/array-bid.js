const arr = [
  "1 nivel",
  ["2 nivel", 42, true],
  [
    ["3 nivel", "item 1 do 3"],
    ["3 nivel", "2 item do 3"],
  ],
];
console.log(arr);
console.log(arr[2][1][1]);

const matriz = [
  ["l0-c0", "l0-c1", "l0-c2", "l0-c3"],
  ["l1-c0", "l1-c1", "l1-c2", "l1-c3"],
  ["l2-c0", "l2-c1", "l2-c2", "l2-c3"],
  ["l3-c0", ["l3-c1", "teste"], "l3-c2", "l3-c3"],
];

console.table(matriz);

// neste caso, a string "l3-c0" é considerar um array
// cadeia de caractere e é impresso a posição
// 1, que é o valor 3 da cadeia.
console.log(matriz[3][0][1]);

// inserir linha
matriz.push(["l4-c0", ["l4-c1", "teste"], "l4-c2", "l4-c3"]);
console.table(matriz);

// inserir coluna
// na posição zero significa primeira linha tbm
// logo para preencher todas as linhas da nova coluna
// tenho que iterar a matriz toda.
matriz[0].push("coluna");
console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];

    console.log("pos: (" + i + ", " + j + "): " + elemento);
  }
}
