//Faça um programa que crie e preencha uma matriz  A [5 x 5] com números reais. Ao final apresente os valores armazenados nas colunas 1, 3 e 5.

let A = [];

//Prencher linha
for (let i = 0; i < 5; i++) {
  //Prencher coluna
  A[i] = [];

  for (let j = 0; j < 5; j++) {
    A[i][j] = parseFloat(
      prompt(`Digite o número REAL que deseja guardar em ${i}, ${j}: `)
    );
  }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`Coluna ${i}: ${A[i][j]}`);
    }
  }

