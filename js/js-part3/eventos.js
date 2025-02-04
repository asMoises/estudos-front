function register(ev) {
  console.log(ev);
  const sectionElementEv = ev.currentTarget.parentNode;
  const username = sectionElementEv.children.username.value;
  const password = sectionElementEv.children.password.value;
  const passwordConfirmation =
    sectionElementEv.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem");
  }
}

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Event Removed");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

//button.addEventListener("mouseover", function (ev) {
//  console.log(ev);
//});
