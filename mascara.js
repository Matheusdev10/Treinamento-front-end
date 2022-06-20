//1º  uma mascara de cpf, (12365656254) (124.421.412-45)
// 2º mascara de cnpj    (123456000112)  (XXX. XXX/0001-XX)
// 3º mascara de telefone (34988860574) ((34) 9 9898-0909)
//4º primeira letra do nome em maiusculo tipo(yago lopes, Yago Lopes)

// let texto = `"matheus é amigo de joão. Matheus é colega de João"`;
// const regExp1 = /matheus/;
// const found = regExp1.exec(texto);
// console.log(found);

// const regExp1 = /João/gi;
// const texto = `"meu nome é Maria. MaaaaaaaaaaariiiiiaaaaaaaaaaaaaaaaaaaaTenho 18 anos e moro na cidade de araguari-MG".
// "Gosto de patinar e soltar pipa nas horas livres"`;
// const regExp2 = /(Maria)|(Maria)/;
// const encontrado = regExp2.exec(texto);
// console.log(encontrado);

let cpf = '12345678987';
let regex = /(1..|4..|7..|87)/gi;
console.log(regex.test(cpf));
// let cpfreg = regex.exec(cpf);
// console.log(cpfreg);
