//Faça um algoritmo que leia 10 números para um vetor A e 10 números para um vetor B. A seguir, preencha um vetor C, de 10 posições, com a soma de cada elemento de A com B. Ao final mostre o vetor C.

let a = [];
let b = [];
let c = [];

for (i = 0; i <= 5; i++) {
  a.push(Number(prompt(`Insira o ${i + 1} número para o vetor A: `)));
}

for (i = 0; i <= 5; i++) {
  b.push(Number(prompt(`Insira o ${i + 1} número para o vetor B: `)));
}

for (i = 0; i <= 5; i++) {
  c[i] = b[i] + a[i];
}

console.log(c);
