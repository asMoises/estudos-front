// Funções
function pegarPosicao(e) {
  const posicao = [];
  posicao.length = 0; // Limpa o array antes de adicionar os valores novamente

  // Resgata o elemento checkbox .divs-input cujo filho é um type=checkbox
  const checkboxes = document.querySelectorAll(
    ".divs-input input[type='checkbox']"
  );

  // itera os checkboxes verificando os marcados
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);
      // Adiciona o texto do rótulo ao array
      posicao.push(label.textContent.trim());
    }
  });
  // teste de impressao das posições
  // console.log(posicao);

  // limpar as marcações e retornar apenas goleiro marcado.
  checkboxes.forEach((e) => {
    if (e.id != "goleiro") {
      e.checked = false;
    }
  });

  // resgato o elemento ul pre inserido no html
  const ul = document.getElementById("input-list");

  // Popoular o array jogadores apenas com os marcados
  posicao.forEach((e) => {
    const newLi = document.createElement("li");
    newLi.className = "list-items";
    newLi.innerText = e + ": ";

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "nameInput";
    newInput.id = "nameInput";

    const newLiNC = document.createElement("li");
    newLiNC.className = "list-items";
    newLiNC.innerText = "Número: ";

    const newInputNC = document.createElement("input");
    newInputNC.type = "text";
    newInputNC.name = "numeroInput";
    newInputNC.id = "numeroInput";

    const linha = document.createElement("br");

    newLi.appendChild(newInput);
    newLiNC.appendChild(newInputNC);

    //    newInput.focus();
    ul.append(linha, newLi, newLiNC);
  });
  const sectionButton = document.getElementById("saveButton");

  // outros eventos do botão salvar
  sectionButton.appendChild(createSaveButton());

  // Adicionar eventos para hover e click
  buttonSave.addEventListener("mouseover", () => {
    buttonSave.style.backgroundColor = "#87cefa"; // Azul mais intenso
    buttonSave.style.transform = "scale(1.05)"; // Aumenta ligeiramente
  });

  buttonSave.addEventListener("mouseout", () => {
    buttonSave.style.backgroundColor = "#add8e6"; // Retorna ao azul claro
    buttonSave.style.transform = "scale(1)"; // Retorna ao tamanho normal
  });

  buttonSave.addEventListener("mousedown", () => {
    buttonSave.style.backgroundColor = "#4682b4"; // Azul escuro ao clicar
    buttonSave.style.transform = "scale(0.95)"; // Reduz ligeiramente
  });

  buttonSave.addEventListener("mouseup", () => {
    buttonSave.style.backgroundColor = "#87cefa"; // Azul mais intenso após o clique
    buttonSave.style.transform = "scale(1.05)"; // Aumenta ligeiramente
  });
}

function createSaveButton() {
  // Inserir o botão "Salvar"
  buttonSave.textContent = "Escalar";

  // Adicionar estilo diretamente ao botão
  buttonSave.style.backgroundColor = "#23b5e6"; // Fundo azul claro
  buttonSave.style.border = "none"; // Remove borda padrão
  buttonSave.style.borderRadius = "12px"; // Bordas arredondadas
  buttonSave.style.padding = "10px 20px"; // Espaçamento interno
  buttonSave.style.color = "#fff"; // Cor do texto
  buttonSave.style.fontSize = "16px"; // Tamanho da fonte
  buttonSave.style.cursor = "pointer"; // Mostra o cursor de mão ao passar sobre o botão
  buttonSave.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)"; // Sombra
  buttonSave.style.transition =
    "background-color 0.3s ease, transform 0.2s ease"; // Transição suave

  // Adicionar o botão ao corpo ou a outro elemento
  document.body.appendChild(buttonSave);

  return buttonSave;
}

function escalar(e) {
  // Recupera Nodelist dos inputs e converte para arrays
  const nameInputsArray = [
    ...document.querySelectorAll("input[name='nameInput']"),
  ];
  const numeroInputsArray = [
    ...document.querySelectorAll("input[name='numeroInput']"),
  ];

  // Verificar se todos os inputs estão preenchidos
  const allInputsFilled = nameInputsArray.every((nameInput, index) => {
    const numeroInput = numeroInputsArray[index];
    return nameInput.value.trim() !== "" && numeroInput.value.trim() !== "";
  });

  if (!allInputsFilled) {
    alert("Algum input está vazio!");
    return; // Sai da função se houver inputs vazios e não exibe mais nada!!!!
  }
  const escalar = confirm("Deseja escalar os jogadores?");
  if (!escalar) return;

  // Criar array para armazenar os jogadores
  const jogadores = nameInputsArray.map((nameInput, index) => {
    const numeroInput = numeroInputsArray[index];
    return {
      posicao: nameInput.closest("li").innerText.replace(/:\s*$/, ""), // Extrair posição do texto do <li>
      nome: nameInput.value.trim(), // Valor do input nameInput
      numero: numeroInput.value.trim(), // Valor do input numeroInput
    };
  });

  const ul = document.getElementById("result-list");

  jogadores.forEach((e) => {
    const liNome = document.createElement("li");
    const liPosicao = document.createElement("li");
    const liNumero = document.createElement("li");
    const linha = document.createElement("br");

    liNome.textContent = "Joagdor: " + e.nome;
    liPosicao.textContent = "Posição: " + e.posicao;
    liNumero.textContent = "Camisa: " + e.numero;

    ul.append(liNome, liNumero, liPosicao, linha);
  });
}

const buttonSave = document.createElement("button");
buttonSave.addEventListener("click", escalar); // Inserção dinâmica, quando o botão avançar for pressionar

const button = document.getElementById("register-button");
button.addEventListener("click", pegarPosicao);
