const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


// Mapeando um array sem usar Map
const nomes = []
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}

console.log("nomes: "+nomes)


// map mais elegante e organizado com hi-order functions
const nomes_ = personagens.map(function (persona) { 
  return persona.nome
})

console.log("Nomes 2: "+nomes_)



// Filter com hi-order-func
// primeiro a forma de filtrar sem o filter
const orcs = []
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i])
  }
}
console.log(orcs)

// Usando o filter do array
const orcs_ = personagens.filter(function (pers) {
  return pers.raca === "Orc"
})

console.log(orcs_)

// Método reduce para criar algum formato de estrutura de dados a partir de um array
// por exemplo: se eu quiser somar o valor de "nivel" que esta dentro do array

const nivelTotal = personagens.reduce(
  function (vAcumlado, pers) {
    return vAcumlado + pers.nivel
  },0)

console.log(nivelTotal)

// Manipulação de estrutura de dados

// Dado o array, crie um objeto agrupando os personagens 
// por classe:

// Cada raça deve virar um array dentro do objeto

const racas = personagens.reduce(function (valorAcumulado, pers) {
  if (valorAcumulado[pers.raca]) {
    valorAcumulado[pers.raca].push(pers)
  } else {
    valorAcumulado[pers.raca] = [pers]
  }
  return valorAcumulado
},
  {}// aqui eu crio um objeto vazio como parâmetro da função reduce
)

console.log(racas)

// ordenando por nivel
const persona_ = personagens.slice().sort(function (a, b) { 
  return a.nivel-b.nivel
})
console.log(personagens)
console.log(persona_)