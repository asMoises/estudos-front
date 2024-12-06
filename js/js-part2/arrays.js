// Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
// O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem
// mostrando sua posição ao lado do nome(ex.: 1º Matheus, 2º Marcos, etc).
// O menu também deve permitir escolher entre as opções de:
// “Novo paciente”, para adicionar um novo paciente ao fim da fila(pedindo o nome do paciente),
// “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e
// “Sair”.
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
let new_pac = "";
let lista_pac = "Ordem de Atendimento:\n\n";
let opt = "";

let pac = ["Mateus", "Marcos", "João", "Lucas", "Moisés", "Teófilo"];

function criaLista(pac) {
  for (let index = 0; index < pac.length; index++) {
    const element = pac[index];
    lista_pac += index + 1 + "° " + element + "\n";
  }
  return lista_pac;
}

do {
  opt = parseFloat(
    prompt(
      "1 - Novo Paciente.\n2 - Consultar Paciente\n******************\n0 - Sair."
    )
  );
  switch (opt) {
    case 0:
      alert("Saindo...");
      break;
    case 1:
      alert(criaLista(pac));
      break;
    case 2:
      new_pac = prompt("Digite o nome do pacinete:");

      pac.push(new_pac);
      alert(criaLista(pac));
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opt !== 0);
