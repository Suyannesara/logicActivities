//2) Crie um programa que receba dez nomes, armazene-os em um vetor e ao final mostre a listagem, indicando a posição de cada nome.

let nomes = [];

for (i = 0; i <= 9; i++) {
  nomes.push(prompt(`Insira o nome da ${i}° pessoa: `));
}

for (j = 0; j <= 10; j + 2) {
  console.log(`${nomes[j]} em ${j}`);
}