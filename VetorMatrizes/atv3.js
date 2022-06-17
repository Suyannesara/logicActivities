//Escreva um programa que crie vetores para receber o nome e a média final de cada um dos 30 alunos de uma turma.  Ao final exiba a lista de alunos, com as respectivas notas, o total de alunos aprovados e o total de alunos reprovados. Sabe-se que a nota para aprovação é 6.0.

let alunos = [{
    nome: "",
    mediaFinal: ""
}]
let tot_aprovados;
let tot_reprovados;

for(i = 0; i <= 10; i++){
    alunos.push({
        nome: prompt(`Insira o nome da ${i}° pessoa: `),
        mediaFinal: Number(prompt(`Insira média total da ${i}° pessoa: `)),
    })
}

for(j = 0; j <= alunos.length; j++){
    console.log(`${alunos[j].nome}  - ${alunos[j].mediaFinal}`);

    if(alunos[j].mediaFinal > 5){
        tot_aprovados += 1
    }else{
        tot_reprovados += 1
    }
}

console.log(`Total de alunos aprovados: ${tot_aprovados}`)
console.log(`Total de alunos reprovados: ${tot_reprovados}`)

