//) Faça um programa que receba a idade, o nome e o sexo de 40 pessoas. Ao final, mostre a quantidade de homens, a quantidade de mulheres, a maior idade entre os homens, o nome do homem mais velho, a maior idade entre as mulheres e o nome da mulher mais velha. Caso a maior idade se repita, considere apenas a primeira digitada.

let fem = [];
let masc = [];
let qt_f;
let qt_m;

for (i = 1; i <= 5; i++) {
  let sexo = prompt(`Insira o sexo da ${i}° pessoa (M ou F): `);

  if (sexo == "M") {
    qt_m += 1;
    alert("é homi");
    masc.push({
      nome: prompt(`Insira o nome da ${i}° pessoa: `),
      sexo: sexo,
      idade: Number(prompt(`Insira a idade da ${i}° pessoa: `)),
    });
  } else if (sexo == "F") {
    alert("É muié");
    qt_f += 1;

    fem.push({
      nome: prompt(`Insira o nome da ${i}° pessoa: `),
      sexo: sexo,
      idade: Number(prompt(`Insira a idade da ${i}° pessoa: `)),
    });
  }
}

//Organizando os dois arrays em ordem crescente de idade
fem.sort((a, b) => a.idade - b.idade);
masc.sort((a, b) => a.idade - b.idade);

console.log(
  `A mulher mais velha é ${fem[fem.length - 1].nome} com ${
    fem[fem.length - 1].idade
  }`
);
console.log(
  `O homem mais velho é ${masc[masc.length - 1].nome} com ${
    masc[masc.length - 1].idade
  }`
);
