//

let sexo;
let qt_f;
let qt_m;

for(i = 1; i <= 200; i++){
    sexo = prompt(`Insira o sexo da ${i}° pessoa (M ou F): `)
    sexo.toUpperCase()

    if(sexo == 'M'){
        qt_m += 1

    }else if (sexo == 'F'){
        qt_f += 1
    }

}
console.log(`O numéro de pessoas do exo feminino é ${qt_f} e masculino é ${qt_m}`);