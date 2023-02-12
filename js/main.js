const tabuleiro = document.querySelector('.tabuleiro');

try {
  console.log(tabuleiro);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const personagens = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];

try {
  console.log(personagens);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const array_list = (array) => { return array[Math.floor(Math.random() * array.length)]; }

try {
  console.log(array_list(personagens));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const generateURL = (arrayList, url, url_extension) => { return arrayList.map(filename => [ url + filename + url_extension ] ) }

try {
  console.log(generateURL(personagens, 'https://memoriagame.github.io/assets/theme/character/pokemon/', '.png'));
  // Expected output: "https://memoriagame.github.io/assets/theme/character/pokemon/slowbro.png"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

/*
 * aleatoriedade, randomização via api em
 * GET: https://memoriagame.github.io/assets/theme/character/pokemon/{filename}+".png" 
 * api const characterPokemonFilename = personagens.map(filename => `${file}`+filename+'.png')
 * api const characterPokemonFilename = personagens.map(filename => `https://memoriagame.github.io/assets/theme/character/pokemon/`+filename+'.png') 
 * api const pokemonRandom = characterPokemonFilename[Math.floor(Math.random() * characterPokemonFilename.length)];
 */

const characterPokemonFilename = generateURL(personagens, `https://memoriagame.github.io/assets/theme/character/pokemon/`, ".png")

try {
  console.log(characterPokemonFilename);
  // Expected output: "https://memoriagame.github.io/assets/theme/character/pokemon/slowbro.png"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const pokemonRandom = array_list(characterPokemonFilename, characterPokemonFilename);

try {
  console.log(pokemonRandom);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}


/*
 * aleatoriedade, randomização via api de países em 
 * GET: `https://hatscripts.github.io/circle-flags/flags/${flagName}.svg`
 * api const filenameCountry = listCountry.map(filename => `https://hatscripts.github.io/circle-flags/flags/`+filename+'.svg')
 * api const countryRandom = filenameCountry[Math.floor(Math.random() * filenameCountry.length)];
 */

const listCountry = ['br', 'cn', 'us', 'ru', 'ng', 'in', 'gb', 'id'];

try {
  console.log(listCountry);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}


const filenameCountry = generateURL(listCountry, `https://hatscripts.github.io/circle-flags/flags/`, ".svg")

try {
  console.log(filenameCountry);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}


const countryRandom = array_list(filenameCountry, filenameCountry);

try {
  console.log(countryRandom);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const pontuar = `<div class="rating-stars">
         <!--- <div> or <div class="rating-stars"> --->
         <input type="radio" name="rating" id="rs0" checked><label for="rs0"></label>
         <input type="radio" name="rating" id="rs1"><label for="rs1"></label>
         <input type="radio" name="rating" id="rs2"><label for="rs2"></label>
         <input type="radio" name="rating" id="rs3"><label for="rs3"></label>
         <input type="radio" name="rating" id="rs4"><label for="rs4"></label>
         <input type="radio" name="rating" id="rs5"><label for="rs5"></label>
         <span class="rating-counter" id="pointValue"></span>
      </div>`;

try {
  console.log(pontuar);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const cronometro = `<p><span id="horas">00</span>:<span id="minutos">00</span>:<span id="segundos">00</span>:<span id="milissegundos">00</p>
<button id="iniciar">Iniciar</button>
<button id="pausar">Pausar</button>
<button id="resetar">Resetar</button>`

try {
  console.log(cronometro);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

try {
  console.log(createElement('img', 'test'));
  // Expected output: "<img className="test"/>"
} catch (e) { // Catches a malformed URI
  console.error(e);
}


let primeiraCarta = '';

try {
  console.log(primeiraCarta);
  // Expected output: ""
} catch (e) { // Catches a malformed URI
  console.error(e);
}


let segundaCarta = '';

try {
  console.log(segundaCarta);
  // Expected output: ""
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const fimDeJogo = () => {
  const cartaInativa = document.querySelectorAll('.carta-inativa');
  if (cartaInativa.length === 32) { // 34?
    console.log('Parabéns, você conseguiu!, sua pontuacao eh: ', cartaInativa.length);
    playAgain();
  }
}

const playAgain = () => {
  document.getElementById('btnRestart').style.display = 'flex';
}


const restart = () => {
  document.location.reload(true);
}

const checarCarta = () => {
  const primeiroPersonagem = primeiraCarta.getAttribute('data-personagens');
  const segundoPersonagem = segundaCarta.getAttribute('data-personagens');
  if (primeiroPersonagem === segundoPersonagem) {
    primeiraCarta.firstChild.classList.add('carta-inativa');
    segundaCarta.firstChild.classList.add('carta-inativa');
    primeiraCarta = '';
    segundaCarta = '';
    fimDeJogo();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove('revele-carta');
      segundaCarta.classList.remove('revele-carta');
      primeiraCarta = '';
      segundaCarta = '';
    }, 500);
  }
}

const reveleCarta = ({target}) => {
  if (target.parentNode.className.includes('revele-carta')) {
     return;
  }
  if (primeiraCarta === '') {
    target.parentNode.classList.add('revele-carta');
    primeiraCarta = target.parentNode;
  } else if (segundaCarta === '') {
    target.parentNode.classList.add('revele-carta');
    segundaCarta = target.parentNode;
    checarCarta();
  }
}

// upload-card or local-card or random-card for back-card or //`url('./css/image/${personagens}.png')`
// "./css/back.png", "./css/back1.jpg", 
const imageArray = [
    "https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cf14db6ed80a0410e229368963e9d8&auto=format&fit=crop&w=1900&q=80", 
    'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png',
    'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg',         
    "https://source.unsplash.com/collection/495468/1600x900",
    "https://hatscripts.github.io/circle-flags/flags/br.svg",
    "data:image/jpeg;base64,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",
    pokemonRandom,
    countryRandom,
    "https://avatars.githubusercontent.com/u/124619609?s=200&v=4",
    "https://raw.githubusercontent.com/memoriagame/assets/main/theme/yuji_yashima_arthropoda/fundo.png"
];


try {
  console.log(imageArray);
  // Expected output: ""
} catch (e) { // Catches a malformed URI
  console.error(e);
}

const randomNum = Math.floor(Math.random() * imageArray.length);

try {
  console.log(randomNum);
  // Expected output: ""
} catch (e) { // Catches a malformed URI
  console.error(e);
}

// modos de jogar memoriagame
const selectTypeCardNow = (selectObject) => {
  if (selectObject.value === '') {
     return null;
  }
  if (selectObject.value === '0') {
     return imageArray[0]; 
  }
  if (selectObject.value === '1') {
     return imageArray[randomNum];
  }
  if (selectObject.value === '2') {
     return imageArray[1];
  }
  if (selectObject.value === '3') {
     return imageArray[2];
  }
  if (selectObject.value === '4') {
     return imageArray[3];
  }
  // jogar memoriagame com cartas frontais ou traseiras de cores variadas
  if (selectObject.value === '5') {
      // removeCSSVar('--cardImageBack1') // removeCSSVar('--cardImageBack2') // removeCSSVar('--cenario') // mudar_background_color("back", "blue");
      return imageArray[0]; 
  }
  // jogar memoriagame com pontuacao
  if (selectObject.value === '6') {
      document.getElementById("pontuar").innerHTML = pontuar;
      return imageArray[0]; 
  } 
  // jogar memoriagame com cronometro
  if (selectObject.value === '7') {
      document.getElementById("cronometro").innerHTML = cronometro;
      return imageArray[0]; 
  }
  // jogar memoriagame com card frontal brasileiro
  if (selectObject.value === '8') {
      return imageArray[4]; 
  } 
  // jogar memoriagame com card frontal chicoscience
  if (selectObject.value === '9') {
      return imageArray[5]; 
  } 
  // jogar memoriagame com card frontal pokemon
  if (selectObject.value === '10') {
      return imageArray[6]; 
  } 
}


const createCarta = (personagens, selectTypeCard) => {
  const carta = createElement('div', 'carta');  
  const front = createElement('img', 'face front');
  const back = createElement('img', 'face back');
  
try {
  console.log(personagens);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}
  
 const imgLocal =  `https://memoriagame.github.io/assets/theme/character/pokemon/` + personagens + ".png"
try {
  console.log('imgLocal:', imgLocal);
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // Catches a malformed URI
  console.error(e);
}
  
  front.src = `https://memoriagame.github.io/assets/theme/character/pokemon/` + personagens + ".png";
  
  /*
   * ./css/image/${personagens}.png 
  */
  
  carta.appendChild(front); 
  back.src = selectTypeCardNow(selectTypeCard); 
  //reset_if_image_is_null('back')
  carta.appendChild(back);
  carta.addEventListener('click', reveleCarta);
  carta.setAttribute('data-personagens', personagens);
  return carta;
}

const loadGame = (selectTypeCard) => {
  const duplicatepersonagens = [...personagens, ...personagens]
  const shufflyArray = duplicatepersonagens.sort(() => Math.random() - 0.5);
  shufflyArray.forEach((personagens) => {
    const carta = createCarta(personagens, selectTypeCard);
    tabuleiro.appendChild(carta);
  });
}

/*
require.config({
 paths: {
   "jsdelivr": "https://cdn.jsdelivr.net/gh/memoriagame/js/memoriagame/main",
   "githubPages": "https://memoriagame.github.io/js/memoriagame/main",
   "githubusercontent": "https://raw.githubusercontent.com/memoriagame/js/main/memoriagame/main"
  }});

try {
  require(['jsdelivr'], function(){
    console.log('jsdelivr is loaded.')
  });
} catch (error) {
  console.error(error);
  require(['githubPages'], function(){
    console.log('githubPages is loaded.')
  });
 try {
 require(['githubusercontent'], function(){
    console.log('githubusercontent is loaded.')
  });
} catch (error) {
  console.error(error);
 module = require('./js/main');
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}

 
  
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
*/
