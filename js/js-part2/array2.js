let pacientes = ["Mateus", "Marcos", "João", "Lucas", "Moisés", "Teófilo"];

function criaLista(pacientes) {
  return (
    "Ordem de Atendimento:\n\n" +
    pacientes.map((paciente, index) => `${index + 1}° ${paciente}`).join("\n")
  );
}

let opcao;

do {
  opcao = Number(
    prompt(
      "1 - Novo Paciente\n2 - Consultar Paciente\n******************\n0 - Sair."
    )
  );

  switch (opcao) {
    case 0:
      alert("Saindo...");
      break;
    case 1:
      const novoPaciente = prompt("Digite o nome do paciente:");
      if (novoPaciente) {
        pacientes.push(novoPaciente.trim());
        alert(criaLista(pacientes));
      } else {
        alert("Nome inválido!");
      }
      break;
    case 2:
      alert(criaLista(pacientes));
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== 0);
