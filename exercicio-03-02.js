 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let soma = 0;
// ############# EXERCICIO 1 ###################

// for (let i = 0; i < numbers.length; i +=1){
//     console.log (numbers[i]);
// }

// for (let i of numbers){
//     console.log (i);
// }

// for (let i=0 ; i< numbers.length; i +=1){
//     console.log (numbers[i]);
// }

// ############### EXERCICIO 2 ############################

// for (let i = 0; i < numbers.length; i += 1){
//     soma += numbers [i];
// }
// console.log (soma);

// ############ EXERCICIO 3 #################

// for (let i =0; i< numbers.length; i +=1){
//     soma += numbers [i];
// }

// console.log (soma/numbers.length);

// ########## EXERCICIO 4 ###########

for (let i =0; i< numbers.length; i +=1){
    soma += numbers [i];
}

let resultado = soma/numbers.length;


if (resultado > 20){
    console.log (resultado + " Então o valor é maior que 20");
}
else {
    console.log ( resultado + " Então o valor é menor ou igual a 20");
}

