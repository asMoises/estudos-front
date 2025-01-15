function addInput() {
  const ul = document.getElementById("input-list");
  const newLi = document.createElement("li"); // neste momento a tag li (item de uma lista qlqr), ja existe no js e será posteriormente inserida na lista input-list.
  const newInput = document.createElement("input");

  newLi.className = "list-items";
  newLi.innerText = "Novo Input:";

  newInput.type = "text";
  newInput.name = "nameInput";

  newLi.textContent = "meu text 2";
  // aninhando os elementos criados:
  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
