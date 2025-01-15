//  No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do DOM através do id:
function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list"); // usando document
  console.log(contactList); // com o document ele traz todo o elemento

  // Também podemos obter elementos a partir de um nome de tag:
  // Obter vários elementos (HTMLCollection) a partir de um nome de tag
  const liElements = document.getElementsByTagName("li");
  console.log(liElements);

  //E também a partir de uma class:
  // Obter vários elementos (HTMLCollection) a partir de uma classe
  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  //E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
  // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
  const x = prompt("Entre com o nome do label");
  const contacts = document.querySelectorAll("#contact-list > li > label");
  contacts.forEach((e, indice) => {
    if (indice == 1) e.textContent = x;
  });
  console.log(contacts);

  //Podemos obter uma lista de elementos a partir do atributo name:
  // Obter vários elementos (NodeList) a partir do atributo name
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  //​ Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(),
  // porém selecionando o primeiro elemento que corresponder à query.
  // Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.
  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)

  const contact = document.querySelector("#contact-list > li > label");
  console.log(contact);
  console.log(contact.textContent);
  contact.textContent = "Novo Label";
  console.log(contact.textContent);
}
