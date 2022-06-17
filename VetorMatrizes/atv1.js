//Escrever um programa que recebe 10 nomes num vetor e exiba os nomes armazenados nos elementos com índice ímpar.
let nomes = [];

for (i = 0; i <= 9; i++) {
  nomes.push(prompt(`Insira o nome da ${i}° pessoa: `));
}

for (j = 0; j <= 10; j + 2) {
  console.log(nomes[j]);
}
