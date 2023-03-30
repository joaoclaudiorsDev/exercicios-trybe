/*  Desenvolva cada exercício a seguir com o uso de funções.

    Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:
       Adicione um valor ao saldo.
        Subtraia um valor do saldo.
        Multiplique o valor do saldo por uma taxa.
        Divida o valor do saldo.

*/

let saldo = 100;

function somaSaldo (valor){
    return saldo + valor
};

function subSaldo (valor){
    return saldo - valor
};

function multSaldo (valor){
    return saldo * valor
};

function divSaldo (valor){
    return saldo / valor
};

console.log (somaSaldo (200), (subSaldo(50)), (multSaldo)(5), (divSaldo(2)));
