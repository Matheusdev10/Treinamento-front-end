// const nome = 'matheus';
// console.log(nome);

// function myFunction(a, n) {
//   const arr = a.split('');
//   return arr[n - 1];
// }

// function myFunction(a) {
//   const arr = a.split('');
//   let palavra = '';
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i > 2) {
//       palavra = palavra + element;
//     }
//   }

//   return palavra;
// }

// function myFunction(a) {
//   return a.slice(3);
// }

// function myFunction(str) {
//   // 1º passo: achar o tamanho da string
//   const tamanhoString = str.length;

//   //2º passo: descobrir posição de inicio

//   const posicaoInicio = tamanhoString - 3;
//   return str.slice(posicaoInicio);

//   // 3º passo: pegar os 3 ultimos caracteres da string

//   //4º passo: retornar valor
// }

// function myFunction(a, n) {
//   return a[n - 1];
// }

// function myFunction(a) {
//   const arr = a.split('');
//   let letras = '';
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i > 3) {
//       letras = letras - element;
//     }
//   }

//   return;
// }

// function myFunction(a, b) {
//   let count = 0;
//   for (let i = 0; i < b.lenght; i++) {
//     const letra = b[i];
//     if (letra === a) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// function myFunction(a) {
//   return a.toFixed(2);
// }

// function myFunction(a) {
//   const arr = a.split('');
//   if (arr % 2 === 0) {
//   }
//   return a.slice(0, -4);
// }

// function myFunction(a) {
//   //1º passo: aplicar a funcao tofixed retornando com valor arredondado
//   const valorString = a.toFixed(2); // "2.00"
//   return Number(valorString); // retorna um 2.00 (Number)
// }

// function myFunction(a) {
//   // 1º passo:  transformar string em um array
//   const arr = a.split('');
//   //2º passo: dividir o tamanho do array por 2
//   const halfNumber = arr.lenght / 2;
//   // 3º passo: utiilizar o metodo slice para tirar tudo o que nao precisa
//   const returnValue = a.slice(-halfNumber);
//   // 4º passo: dar um return
//   return returnValue;
// }

// function myFunction(a) {
//   const halfNumber = a.length / 2;
//   const returnValue = a.slice(0, -halfNumber);
//   return returnValue;
// }

// function myFunction(a, b) {
//   return b.split(a).length;
// }

// function myFunction(a, b, c, d, e, f) {
//   const soma = a + b;
//   const subtraia = soma - c;
//   const multiplica = subtraia * d;
//   const divisao = multiplica / e;
//   const potencia = Math.pow(divisao, f);
//   return potencia;
// }

// function myFunction(a) {
//   const string = a + '';
//   const strings = string.split('');
//   return strings.map((digit) => Number(digit));
// }

// function myFunction(a) {
//   if (a % 1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// //includes funciona pra string e array. ele verifica se o elemento que eu to passando esta incluso dentro do array ou dentro da string
// function myFunction(a, b) {
//   return a.includes(b) ? b + a : a + b;
// }

// function myFunction(x, y) {
//   let count = '';
//   if (count % y === 0) {
//     count = count + y;
//     return count;
//   } else {
//     return x;
//   }
// }

// // exericicio proximo numero natural
// function myFunction(x, y) {
//   //1º passo: verificar se x é divisivel por y e se for retornar x
//   // se o resto da divisão de x por y por igual a 0, retorne o valor de x
//   let count = '';
//   if (x % y === 0) {
//     return x;
//   }
//   //2º passo: se x nao for divisivel por y devo retornar o proximo numero natural que é divisivel por y
//   else {
//     return (count = count + 1);
//   }
// }

// // resposta do autor
// function myFunction(x, y) {
//   while (x % y !== 0) {
//     x++;
//   }
//   return x;
// }

// function myFunction(x, y) {
//   if (x % y !== 0) {
//     return x++;
//   } else return x;
// }

// function myFunction(a, b) {
//   // 1 passo: tirar o caracter especial
//   const palavraASemCaracter = a.replace('%', '');
//   const palavraBsemCaracter = b.replace('%', '');
//   //2º passo: inveter as palavras
//   const palavraRevertida = palavraBsemCaracter.split('').reverse().join('');
//   //3º passo: juntar as strings
//   const stringJuntada = palavraASemCaracter + palavraRevertida;
//   //4º passo: colocar primeira letra em maiusculo
//   const stringFinal =
//     stringJuntada[0].toUpperCase() + stringJuntada.substring(1);
//   return stringFinal;
// }

// function myFunction(a) {
//   //1º passo: descobrir como um numero pode ser primo

//   //2º passo: Verificar se o numero é primo, e se for, retorne a
//   if (a % 2 === 0) {
//     return a++;
//   } else {
//     return a;
//   }
// }
// //se ele tiver apenas 2 divisores faça tal coisa
// //3º passo: Caso o numero nao seja primo retornar o proximo numero primo natural

// //numero primo > 1
// // divisivel apenas por 1 e por si proprio

// function myFunction(a) {
//   for (let i = 2; i < a; i++) {
//     console.log(':i', i);
//     console.log(':a', a);
//     if (a % i === 0) {
//       i = 2;
//       a = a + 1;
//     } else {
//       return a;
//     }
//   }
// }

// function myFunction(a) {
//   let i = 2;
//   while (a % i === 0) {
//     console.log(':i', i);
//     console.log(':a', a);
//     i = i + 1;
//     a = a + 1;
//   }
//   return a;
// }

// function myFunction(a) {
//   let divisores = 0;
//   for (let index = 1; index <= a; index++) {
//     if (a % index === 0) {
//       console.log(':i if', index);
//       console.log(':a if', a);
//       divisores = divisores + 1;
//     } else if (index === a && divisores !== 2) {
//       console.log(':i else', index);
//       console.log(':a else', a);
//       index = 1;
//       a = a + 1;
//     }
//   }
//   return a;
// }

// function myFunction(a) {
//   let stop = 1;
//   for (let index = 0; index < a; index++) {
//     const numero = index + 1;
//     if (numero === a && stop < 2) {
//       console.log(numero);
//       index = -1;
//       stop = stop + 1;
//     } else {
//       console.log(numero);
//     }
//   }
// }

// function myFunction(a) {
//   function isPrime(a) {
//     let divisores = 0;
//     for (let i = 1; i <= a; i++) {
//       if (a % i === 0) {
//         divisores = divisores + 1;
//       }
//     }
//     return divisores === 2;
//   }

//   while (!isPrime(a)) {
//     a = a + 1;
//   }
//   return a;
// }

// function myFunction(a) {
//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return num > 1;
//   }
//   let n = a;
//   while (!isPrime(n)) n++;
//   return n;
// }

// function myFunction(a, b) {
//   let tamanhoString = a.length;
//   let stringComCaracter = tamanhoString.replace('', b);
//   console.log(stringComCaracter);
// }

// function myFunction(a, b) {
//   let string = a;
//   let result = string.replace('', b);
//   return result;
// }

// function myFunction(a, b) {
//   let acumulation = 0;
//   let palavra = '';
//   for (let i = a.length - 1; i >= 0; i--) {
//     const element = a[i];
//     palavra = palavra + element;
//     acumulation = acumulation + 1;
//     if (acumulation === 3) {
//       acumulation = 0;
//       palavra = palavra + b;
//     }
//   }
//   return palavra.split('').reverse().join('');
// }

// function myFunction(str) {

//   }
// }
// m
// 1º passo: fazer um array contendo todas as letras do alfabeto
// 2º passo: fazer um for que percorra esse alfabeto trazendo a posiçao da vez
// 3º passo: fazer um if para identificar se a letra do alfabeto é igual a letra da vez do for, e se for pegar a proxima letra
function myFunction(str) {
  let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let proximaPalavra = '';

  for (let i = 0; i < str.length; i++) {
    const letra_str = str[i];

    for (let j = 0; j < alfabeto.length; j++) {
      let letra_alfabeto = alfabeto[j];

      if (letra_str.toLowerCase() === letra_alfabeto.toLowerCase()) {
        const proximaLetra = alfabeto[j + 1];
        if (proximaLetra) {
          proximaPalavra = proximaPalavra + proximaLetra;
        }
      }
    }
  }
  return proximaPalavra.toLowerCase();
}
myFunction('bgddrd');

// function myFunction(str) {
//   const arr = [...str];
//   const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//   return correctedArray.join('');
// }
