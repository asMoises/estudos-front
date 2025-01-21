// Seleciona o botão e o body
const botao = document.getElementById("mudarCor");
const corpo = document.body;

// Lista de cores
const cores = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#A833FF",
  "#FFD433",
];

// Adiciona o evento de clique ao botão
botao.addEventListener("click", () => {
  // Seleciona uma cor aleatória da lista
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  // Altera a cor de fundo do body
  corpo.style.backgroundColor = corAleatoria;
});
