//* (opcionais) 0 ou n
// + (obrigatorios) 1
// /? (opcionais) 0 ou 1
// \ caracter de escape
// {} inidica qtde de vezes e n de vezes que ela vai aparecer

const { texto, arquivos } = require('./base');
// console.log(texto);
//o + nesse caso vai pegar joooooooooaooo, ou seja vai pegar todos os (o)
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

//

// const regExp2 = /\.(jpe?g)/gi;
// // nesse caso se usar assim (jpe?g) eu to falando que o (e) pode aparecer ou não

// for (const arquivo of arquivos) {
//   console.log(arquivo, arquivo.match(regExp2));
// }

// function maiorDeIdade(idade) {
//   if (idade >= 18) {
//     return 'sou maior de idade';
//   } else {
//     return 'nao sou maior de idade';
//   }
// }

//Calcule a média de diversas notas digitadas pelo usuário.
// let nota1 = 10;
// let nota2 = 2;
// let media = (nota1 + nota2) / 2;
// console.log(media);

//Faça um programa que entre com cinco números e imprima o quadrado de cada número.
// let numeros = [18, 20, 30, 40, 50];
// for (let i = 0; i < numeros.length; i++) {
//   let numero = numeros[i];
//   if (numero) {
//     console.log(Math.pow(numero, 2));
//   }
// }

//Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores
let idades = [10, 20, 30, 40, 50];
count = 0;
for (let i = 0; i < idades.length; i++) {
  idade = idades[i];
  if (idade >= 18) {
    count = count + 1;
  }
}
console.log(count);
