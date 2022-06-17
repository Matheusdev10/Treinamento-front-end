// split ( aplicado somente em string e transforma ela em array)

const nome = 'matheus';
nome.split(''); // ["m", "a" , "t", "h", "e", "u", "s"]

const text = 'ola,eu,sou,o,matheus,doido';
//ELE JUNTA AS PALAVRAS ATE CHEGAR NA VIRGULA E AI SEPARA
text.split(','); // ["ola", "eu", "sou", "o", "matheus", "doido"]

const number = '123.333.333';
number.split('.'); //["123", "333", "333"]

//slice (O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.)

const text2 = 'yago';
text2.slice(3); // se eu colocar 3 ele vai excluir as letras y, a, g e irá retornar apenas a letra o

const text3 = 'morango';
// o primeiro valor é o valor que ele vai tirar e o 2 parametro é ate onde ele vai ()
text3.slice(1, 4); // nesse exemplo o slice retornara apenas ora

text3.slice(2, 6); // nesse exemplo o slice retornara apenas rang

//no slice negativo ele tira os ultimos caracteres da string porem voce tem que colocar um valor inicial
const a = 'matheus';
const guardaNome = a.slice(0, -3);

replace;
