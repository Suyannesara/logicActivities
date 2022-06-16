// Faça um programa que receba a idade de 30 pessoas e mostre a maior idade.
let idade;
let i;
while(i <= 30){
    idade = Number(prompt(`Insira a idade da ${i}° pessoa: `))
    let maior;

    if(idade > maior){
        maior = idade;
    }

    i++
}
console.log(maior);