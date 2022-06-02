// Padroes de variaveis
var PascalCase = '';
var camelCase = '';
var snake_case = '';

// tipos primitivos

// Boolean { true | false}
// Number {float | Integer}
// String {char | varchar}
//null
//undefined

// booleanos

var check = true;
var isDia = true;
var isNoite = false;

// Numeros

var idade = 22;
var salario = 3500.75;
var centavos = 0.1;

// string

var nome = 'yago';
var telefone = '(34) 9 8888-9292';

// concatenação de strings
var texto2 = `Ola eu sou o matheus e tenho ${idade}`;

// Nao existente
var sexo = undefined;
var sexo = null;

// Operadores boolean

Boolean('');
false;

Boolean(0);
false;
Boolean('abacaxi');
true;
check.valueOf(); // true;

!!''; //false;
!!''; //abacaxi;

// uma exclamação é negação
!false; //true;
!!true; // true; negando a negação

//Operadores number;

Number(''); // 0
Number('1'); // 1
Number('a'); // NaN
parseInt('1.5'); // 1
parseFloat('1.5'); //1.5
//algoritimo

var corDoSemafaro = 'verde';

if (corDoSemafaro === 'vermelho') {
  console.log('pare');
}

if (corDoSemafaro === 'verde') {
  console.log('siga em frente');
}
if (corDoSemafaro === 'amarelo') {
  console.log('atenção');
}

var ehDia = false;

if (ehDia) {
  console.log('nascer do sol');
}

if (!ehDia) {
  console.log('por do sol e lua');
}

// operadores de string
String(1); // "1"

var teste = 1;
teste.toString(); //"1"

// tipos de variaveis

var teste = ''; //aloca um espaço variavel na memoria do computador
let teste2 = ''; // aloca um espaço mutavel na memoria do computador
const teste3 = ''; // aloca um espaço nao mutavel na memoria do computaodor

// quando usar const var ou let?
//usar const sempre
// let usa quando nao der pra usar o const
