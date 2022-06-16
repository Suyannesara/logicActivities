//A loja de calçados “Pé vestido” deseja saber qual foi o vendedor que obteve o maior valor bruto de vendas no mês. Para solucionar o problema, escreva um programa que receba o nome, o total das vendas de cada um dos 35 vendedores da loja e apure o maior valor em vendas. Ao final você deve mostrar o nome do vendedor e valor das vendas que ele realizou.

let funcionario = [];

for (i = 1; i <= 35; i++) {
  funcionario.push({
    nome: prompt(`Insira o nome da ${i}° pessoa: `),
    tot_vendas: Number(prompt(`Insira o nº de vendas da ${i}° pessoa: `)),
  });
}

funcionario.sort((a, b) => a.tot_vendas - b.tot_vendas);

console.log(
  `O funcionário com maior número de vendas foi ${funcionario[34].nome} com ${funcionario[34].tot_vendas}`
);
