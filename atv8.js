//Faça um programa que receba o salário e o cargo de 30 funcionários e mostre a média de salários por cargo. Sabe-se que o funcionário pode ter o cargo de Analista ou de Técnico.

let salario;
let cargo;
let salarioA;
let salarioT;
let mediaA;
let mediaT;
let qtA;
let qtT;

for(i = 1; i <= 30; i++){
    salario = parseFloat(prompt(`Insira o salário da ${i}° pessoa: `))
    cargo = prompt(`Insira o cargo da ${i}° pessoa:(Analista(A) ou técnico(T)) `)
    cargo.toUpperCase()

    //validação de entrada de dados
    if(cargo != 'A' | cargo != 'T'){
        console.log("O cargo infomado deve ser A( para anlista) ou T( para técnico)")
    }

    if(cargo == 'A'){
        qtA += 1
        salarioA += salario

    }else{
        qtT += 1
        salarioT += salario
    }
}

mediaA = salarioA/qtA
mediaT = salarioT/qtT

console.log(`A média de salario de Analista é de:  ${mediaA} `);
console.log(`A média de salario de Técnico é de:  ${mediaT} `);