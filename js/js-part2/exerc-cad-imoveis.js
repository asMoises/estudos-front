// Cadastro de Imóveis

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações:
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let op;
const imoveis = [];

do {
  opt = Number(
    prompt(
      "Bem-vindo ao Cadastro de Imóveis!\nTotal de Imóveis Cadatsrados: " +
        imoveis.length +
        "\nEscolha uma opção:\n1 - Novo Imóvel\n2 - Listar Imóveis\n3 - Sair"
    )
  );

  switch (opt) {
    case 1:
      const imovel = {};

      imovel.proprietario = prompt("Digite o nome do proprietário:");
      imovel.quartos = Number(prompt("Quantidade de quartos:"));
      imovel.banheiros = Number(prompt("Quantidade de banheiros:"));
      imovel.garagem = prompt("Possui garagem?\n1 - Sim\n2 - Não");

      const confirmacao = confirm(
        "Salvar este imóvel?\nPropietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiro: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }
      break;
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }

      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opt !== 3);
