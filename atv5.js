//5) Faça um programa que receba o nome e a idade de 30 pessoas e mostre o nome da pessoa mais velha.
let mais_velha;
let idade;
let nome;
let i;

while(i <= 30){
    nome = prompt(`Insira o nome da ${i}° pessoa: `)
    idade = Number(prompt(`Insira a idade da ${i}° pessoa: `))

    if(idade > mais_velha){
        mais_velha = idade;
    }

    i++
}
console.log(`A pessoa mais velha é ${nome} com ${mais_velha} anos.`);