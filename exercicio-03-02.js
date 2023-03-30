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

for (let i = 0; i < numbers.length; i += 1){
    soma += numbers [i];
}
console.log (soma);