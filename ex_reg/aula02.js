//replace troca uma coisa por outra e utilizando expressao regular fica mais facil

const { texto } = require('./base');

const regExp1 = /João|Maria/gi;
console.log(texto.replace(/João/gi, 'Felipe'));
console.log(texto.replace(/(João|Maria)/gi, '"$1"'));

console.log(texto.replace(/(João|Maria)/gi, '"$1"')); //quando tenho grupos o
//js habilita uma funcionalidade que é o cifrao e
//1 que simboliza que sao os grupos. todo joao e maria encontrado ele coloca aspas
//esse 1 (cifrao) pega o primeiro grupo que é joao
// posso utilizar função também
//nesse caso a função serve para deixar maria e joao maiusculo
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
);
