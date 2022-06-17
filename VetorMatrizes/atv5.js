//Faça um programa que crie e preencha uma matriz  A [3 x 3] com números reais. Após o preenchimento da matriz, alimente uma segunda matriz B, de mesma dimensão, com os mesmos valores da matriz A multiplicados por 2. Ao final apresente a matriz B.

let A = [];
let B = [];

//Prencher linha
for (let i = 0; i < 3; i++) {
  //Prencher coluna
  A[i] = [];

  for (let j = 0; j < 3; j++) {
    A[i][j] = Number(
      prompt(`Digite o número que deseja guardar em ${i}, ${j}: `)
    );
  }
}

for (i = 0; i <= 3; i++) {
  B[i] = [];

  for (j = 0; j < 3; j++) {
    B[i][j] = A[i][j] * 2;
  }
}

console.log(A);
console.log(B);
