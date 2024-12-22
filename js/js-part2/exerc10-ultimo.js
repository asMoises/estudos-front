//Sistema de Vagas de Emprego

/* 
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível 
gerenciar as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:

Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema.
>> Listar vagas disponíveis.
>> Criar um nova vaga.
>> Visualizar uma vaga.
>> Inscrever um candidato em uma vaga.
>> Excluir uma vaga.
>> Sair.

A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos 
inscritos de todas as vagas.

A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, 
e também deve pedir que o usuário confirme as informações antes de salvá-las.

A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela:
índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o índice da vaga e 
então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o 
usuário confirme a exclusão da vaga antes de realmente exclui-la.

*/

// Functions
let vagas = {}
let candidatos = {}


// **********************************************
const texto = "O que deseja fazer?\n\n"+
"1 - Listar vagas disponíveis\n" +
"2 - Criar um nova vaga\n"+
"3 - Visualizar uma vaga\n"+
"4 - Inscrever um candidato em uma vaga\n"+
"5 - Excluir uma vaga\n"+
"0 - Sair"

let opt = ""
do {
  opt = prompt(texto)
  
  switch (opt) {
    case "1":
      
      break;
    case "2":
      
      break;
    case "3":
      
      break;
    case "4":
      
      break;
    case "5":
      
      break;
    case "0":
      alert("Saindo...")
      break;
  
    default:
      alert("Opção Inválida")
      break;
  }

} while (opt !== "0");