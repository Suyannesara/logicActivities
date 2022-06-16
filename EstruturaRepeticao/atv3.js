
//Faça um programa que receba o preço de 10 produtos e mostre a média de preços.

let preco;
let i = 1;

while(i <= 3){
    preco = Number(prompt(`Insira os preço do produto ${i}`))
    preco += preco

    i++
}
let media = preco/3;
console.log(media)
  


