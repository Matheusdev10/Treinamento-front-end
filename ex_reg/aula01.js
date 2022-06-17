//Padroes utilizados para encontrar, modificar ou validar determinados padroes em strings//
//g( global=> encontra todas as ocorrencias )
//i insensitive
//g e i são flags que fazem a seguinte função. g
//g(se eu tiver mais de um joao ele vai achar)
//i se eu tiver caracteres maiusculos ou minusculos ele vai achar
//()grupo
// | ou
const { texto } = require('./base');
// console.log(texto);

// const regExp1 = /João/gi;
// console.log(regExp1.test(texto));

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
