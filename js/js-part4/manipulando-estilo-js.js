// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

// Adicionando os eventos
document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);

const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, mundo!";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  // input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";
});
document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
});
