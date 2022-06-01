// Padroes de variaveis
var PascalCase = '';
var camelCase = '';
var snake_case = '';

// tipos primitivos

// Boolean { true | false}
// Number {float | Integer}
// String {char | varchar}

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
