//Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e
// adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

let vagas = [];

// Functions
// ***********************************************************

// OPT 1
// Listar vagas disponíveis:
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";

    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

// OPT 2
// Criar um nova vaga:
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
function criarCandidato() {
  alert("Veja a seguir o número da vaga que deseja cadastrar um candidato.");
  listarVagas();
  const indice_vaga = prompt("Informe o índice da vaga:");

  vagas.forEach((vaga, indice) => {
    if (indice == indice_vaga) {
      const nomeCandidato = prompt("Digite o nome do candidato:");
      vaga.candidatos.push(nomeCandidato);
    }
  });
}

// OPT 3A - polimorfismo
// Visualizar uma vaga com parametro enviado na chamada:
function exibirVaga(indice_vaga) {
  const vaga = vagas[indice_vaga];
  const vagaEmTexto = vaga.candidatos.reduce(
    (textoFinal, vaga) => textoFinal + "\n - " + vaga,
    ""
  );

  alert(
    "Vaga nº " +
      entrada_usuario_indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      vagaEmTexto
  );
}

function exibirVaga() {
  const entrada_usuario_indice = prompt(
    "Informe o índice da vaga que deseja exibir:"
  );

  const vaga = vagas[entrada_usuario_indice];
  const vagaEmTexto = vaga.candidatos.reduce(
    (textoFinal, vaga) => textoFinal + "\n - " + vaga,
    ""
  );

  alert(
    "Vaga nº " +
      entrada_usuario_indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      vagaEmTexto
  );
}

// OPT 4
// Inscrever um candidato em uma vaga:
// A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o índice da vaga e
// então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const descricao = prompt("Informe um descrição para a vaga:");
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:");
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  if (confirmacao) {
    // até esta linha o array vagas está vazio e sem formato de dados
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    // agora o array vagas possui as strings nome, descr e dataLimite, e um array vazio chamado candidatos
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}

// OPT 5
// Excluir uma vaga:
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e
// pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
function excluirVaga() {
  alert("Veja a seguir o número da vaga que deseja cadastrar um candidato.");
  listarVagas();
  const indice_vaga = prompt("Informe o índice da vaga:");

  vagas.forEach((vaga, indice) => {
    if (indice == indice_vaga) {
      if (vaga.candidatos.length > 0) {
        alert(
          "Existem candidatos inscrito na vaga. Ela não pode ser excluída!"
        );
      } else {
        const confirmacao = confirm(
          "Deseja excluir vaga: \n" +
            "Nome: " +
            vaga.nome +
            "\nDescrição: " +
            vaga.descricao
        );

        if (confirmacao) {
          const vagaApagada = vagas.splice(indice, 1);
          alert("A vaga " + vaga.nome + " foi apagada com sucesso!");
        }
      }
    }
  });
}

// OPT 6
// A opção liberar vaga tira os candidatos da vaga para que ela seja liberada para manutenção
function liberarVaga() {
  const checkData = vagas.forEach((vaga) => {
    if (vaga.candidatos.length > 1) {
      return true;
    } else return false;
  });

  if (checkData) alert("tem");
  else alert("nao tem");
  /*
  alert("Veja a seguir o número da vaga que deseja cadastrar um candidato.");
  listarVagas();
  const indice_vaga = prompt("Informe o índice da vaga:");
  vagas.forEach((vaga, indice) => {
    if (indice == indice_vaga) {
      if (vaga.candidatos.length > 0) {
        const confirmacao = confirm(
          "Confirma a liberação da vaga " + vaga.nome + "?"
        );

        if (confirmacao) {
          // vaga.candidatos.shift(0, vaga.candidatos.length);
          exibirVaga(indice_vaga);
        }
      } else alert("A vaga não possui inscrições!");
    }
  });*/
}

// *******************************************************
function myMain() {
  const texto =
    "O que deseja fazer?\n\n" +
    "1 - Listar vagas disponíveis\n" +
    "2 - Criar um nova vaga\n" +
    "3 - Visualizar uma vaga\n" +
    "4 - Inscrever um candidato em uma vaga\n" +
    "5 - Excluir uma vaga\n" +
    "6 - Liberar Vaga\n" +
    "0 - Sair";

  let opt = "";
  do {
    opt = prompt(texto);

    switch (opt) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        criarCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        liberarVaga();
        break;
      case "0":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida");
        break;
    }
  } while (opt !== "0");
}

myMain();
