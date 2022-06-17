const senhas = ['urso', 'ursinho', 'mosquito', 'leite', 'ovo', 'novo'];
let descript = false;
//iner coloca as coisas no html pelo lado do js
function renderKeys() {
  const keys = document.getElementById('keys');
  for (let index = 0; index < senhas.length; index++) {
    const senha = senhas[index];
    keys.innerHTML =
      keys.innerHTML + `<span class="key" id="${index}">${senha}</span> </br>`;
  }
}
renderKeys();

function clickButton() {
  const keys = document.getElementsByClassName('key');
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const str = key.innerText;
    const palavraIncripitada = incriptOrDescriptText(str, descript);
    key.innerText = palavraIncripitada;
  }
  descript = !descript;
}

function incriptOrDescriptText(str, descript) {
  let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let proximaPalavra = '';

  for (let i = 0; i < str.length; i++) {
    const letra_str = str[i];

    for (let j = 0; j < alfabeto.length; j++) {
      let letra_alfabeto = alfabeto[j];

      if (letra_str.toLowerCase() === letra_alfabeto.toLowerCase()) {
        const proximaLetra = descript ? alfabeto[j - 1] : alfabeto[j + 1];
        if (proximaLetra) {
          proximaPalavra = proximaPalavra + proximaLetra;
        }
      }
    }
  }
  return proximaPalavra.toLowerCase();
}
