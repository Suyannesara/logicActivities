// Faça um programa que receba 30 números e mostre o maior e o segundo maior número.
let n = []

for(i = 1; i <= 30; i++){
    n.push( parseFloat(prompt(`Insira o ${i}°número: `)))
}

//colocar números do array em ordem crecente
n.sort((x, y) => x - y)

console.log(`O maior número é ${n[29]}`);
console.log(`O segundo maior número é ${n[28]}`);