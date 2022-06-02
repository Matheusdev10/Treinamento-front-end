// o que é uma função?
// uma função é um trecho de código que pode ou não ser executado
// Ela deve seguir um principio do SOLID
// O nome da função deve simbolizar uma ação
function fazerCafe() {
  const comprouCarne = true;
  fazerChurrasco();
}

function fazerChurrasco(comprouCarne) {
  if (comprouCarne) {
    return 'Fazendo churrasco';
  }
}

const isDay = false;
if (isDay) {
  //executar uma função ou invocar a função
  fazerCafe();
}

// outras formas de declarar função

const fazerSuco = () => {};
//invocando a função
fazerSuco();

const callBack = () => {};

// parametros de função

// const lavarRoupa = (sabao) => {
//   if (sabao) {
//     return 'roupa limpa';
//   } else {
//     return 'roupa suja';
//   }
// };

// lavarRoupa(true); // roupa limpa
// lavarRoupa(false); // roupa suja

// Multiplos parametros

// const lavarRoupa = (sabao, agua, detergente, maquina) => {
//   if (sabao && agua && detergente && maquina) {
//     return 'roupa limpa';
//   } else {
//     return 'roupa suja';
//   }
// };

// const sabao = true;
// const agua = true;
// const detergente = true;
// const maquina = true;

// lavarRoupa(sabao, agua, detergente, maquina);

// Multiplos parametros nomeados

const lavarRoupa = ({ sabao, agua, detergente, maquina }) => {
  if (sabao && agua && detergente && maquina) {
    return 'roupa limpa';
  } else {
    return 'roupa suja';
  }
};

const sabao = true;
const agua = false;
const detergente = true;
const maquina = true;
const params = { agua, detergente, maquina, sabao };
lavarRoupa(params);
