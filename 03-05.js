
// ###### Template Literals ########

// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');
// console.log ('Primeira linha \n' +
//               'Segunda Linha \n' +
//               'Terceira Lnha ');




// let meuNome = "João Cláudio";
// console.log (`Welcome ${meuNome}!`);

// ########## ARROWS FUCNTION ###########

//  ----- Esta é uma função normal -----
const soma = function (num1, num2) {
    return num1 + num2;   
}

// ------- esta é uma arrow function ------

const sub = (num1, num2) => num1 - num2;

//  *outros exemplo*

// function contaPalavras (frase){
//     return frase.split (' ').lenght;
// }

const contaPalavras = frase => frase.split (' ').lenght;

//  *outro exemplo*

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});



// ########## OPERADOR TERNARIO ###########

// ------ verficador de idade normal ------
let idade = 18;
let habilitacao = ''

if (idade < 18){
    habilitacao = 'proibido, menó'
} else { 
    habilitacao = ' vai na sombra'
}


// ------------ verificador de idade refatorado -----------

let verificaIdade = (idade < 18) ? ('Tá proibido, menó') : ('Vai na fé');

console.log (verificaIdade);