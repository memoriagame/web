/*
definições iniciais
*/

const tabuleiro = document.querySelector('.tabuleiro');
const personagens = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];

/*
pegar chave aleatória do array
*/ 

const get_random = (list) => {
  return list[Math.floor((Math.random()*list.length))]; 
}

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através das bandeiras dos estados do brasil 
*/ 

const estadosList  = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'] 
const randomNum1 = get_random(estadosList);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através das bandeiras dos times do brasil 
*/

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de cores automáticas e aleatórias
*/

const colorRandom = () => "#"+Math.floor(Math.random()*16777215).toString(16);
// document.getElementById('front').style.backgroundColor= colorRandom;
// document.getElementById('back').style.backgroundColor= colorRandom;
// var svg_xml = (new XMLSerializer()).serializeToString(svg);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de números automáticos e aleatórios que não se repetem
*/

const modoSudoku = Math.floor((Math.random() * 100) + 1);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de números sequenciais
*/

const modoSequencial = Array.from(Array(10).keys());
const randomNum2 = get_random(modoSequencial);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de imagens relacionadas a países
*/

const numberImage = ["004", "248", "008", "012", "016", "020", "024", "660", "010", "028", "032", "051", "533", "036", "040", "031", "044", "048", "050", "052", "112", "056", "084", "204", "060", "064", "068", "535", "070", "072", "074", "076", "086", "092", "096", "100", "854", "108", "132", "116", "120", "124", "136", "140", "148", "152", "156", "344", "446", "162", "166", "170", "174", "178", "184", "188", "384", "191", "192", "531", "196", "203", "408", "180", "208", "262", "212", "214", "218", "818", "222", "226", "232", "233", "748", "231", "238", "234", "242", "246", "250", "254", "258", "260", "266", "270", "268", "276", "288", "292", "300", "304", "308", "312", "316", "320", "831", "324", "624", "328", "332", "334", "336", "340", "348", "352", "356", "360", "364", "368", "372", "833", "376", "380", "388", "392", "832", "400", "398", "404", "296", "414", "417", "418", "428", "422", "426", "430", "434", "438", "440", "442", "450", "454", "458", "462", "466", "470", "584", "474", "478", "480", "175", "484", "583", "492", "496", "499", "500", "504", "508", "104", "516", "520", "524", "528", "540", "554", "558", "562", "566", "570", "574", "807", "580", "578", "512", "586", "585", "591", "598", "600", "604", "608", "612", "616", "620", "630", "634", "410", "498", "638", "642", "643", "646", "652", "654", "659", "662", "663", "666", "670", "882", "674", "678", "680", "682", "686", "688", "690", "694", "702", "534", "703", "705", "090", "706", "710", "239", "728", "724", "144", "275", "729", "740", "744", "752", "756", "760", "762", "764", "626", "768", "772", "776", "780", "788", "792", "795", "796", "798", "800", "804", "784", "826", "834", "581", "840", "850", "858", "860", "548", "862", "704", "876", "732", "887", "894", "716"]
const countryflagsapi = `https://countryflagsapi.com/svg/${get_random(numberImage)}`
const http = new simpleAJAX;
const cards = (idImage) => {
const ImageCountryFlagApi = http.get(countryflagsapi,
  (err, imageURL) => {
    if(err) {
      return err;
    } else {
     // imageURL(svg) to base64
    return $('#'+idImage).attr('src', base64); // document.getElementById(idImage).innerHTML = imageURL;
    }
  });
}

// cards('cardFront');
// cards('cardBack');

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de símbolos do xadrez com uma tabela de código unicode de forma automática e aleatória 
*/

const chessCharsUnicode =  ["U+2655", "U+2656", "U+2657", "U+2658", "U+2659", "U+265A", "U+265B", "U+265C", "U+265D", "U+265E", "U+265F"];
const randomNum3 = get_random(chessCharsUnicode);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de símbolos do xadrez com uma tabela de código html de forma automática e aleatória 
*/

const chessCharsHTML = ["&#9813", "&#9814", "&#9815", "&#9816", "&#9817", "&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"]
const randomNum4 = get_random(chessCharsHTML);

/*
código para gerar cartas frontais e traseiras do jogo memoriagame através de critérios automáticos, aleatórios ou selecionados pelo usuário 
*/

const gerarImagensTraseirasChess = (array_name, colorType, colorType2) => `<div class="face back" style="text-align: center; font-size: 60px; background: ${colorType}; color: ${colorType2};"> ${array_name} </div>`
const gerarImagensFrontaisChess = (array_name, colorType, colorType2) => `<div class="face front" style="text-align: center; font-size: 60px; background: ${colorType}; color:  ${colorType2};"> ${array_name} </div>`
// api and/or 
// gerarImagensTraseirasChess(randomNum1, 'rebeccapurple', 'white')
// gerarImagensTraseirasChess(randomNum2, 'rebeccapurple', 'white')
// gerarImagensTraseirasChess(randomNum3, 'rebeccapurple', 'white')
// gerarImagensTraseirasChess(randomNum4, 'rebeccapurple', 'white')
// gerarImagensTraseirasChess(colorRandom,'rebeccapurple', 'white')
// gerarImagensTraseirasChess(modoSudoku, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(randomNum1, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(randomNum2, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(randomNum3, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(randomNum4, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(colorRandom, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(modoSudoku, 'rebeccapurple', 'white')
// gerarImagensFrontaisChess(CorPadrao, 'rebeccapurple', 'white')
//  6. const arraylist = JogarDeFormaTemporariaComCoresPadronizadas
//  7. const arraylist = JogarDeFormaTemporariaComCoresAleatorias
//  8. const arraylist = JogarDeFormaTemporariaComCartaPadrao
//  9. const arraylist = JogarDeFormaTemporariaComCartaPersonalizada
//  10. const arraylist = JogarDeFormaTemporariaComCartaViaApiUnsplash
//  11. const arraylist = JogarDeFormaTemporariaComCartaViaApiCountryflagsapi
//  14. const arraylist = presidentesBrasil
//  15. const arraylist = numeros-sequenciais

// código para o participante jogar o jogo memoriagame de acordo com um tempo definido, 1:30 por jogo com cores padronizadas
const JogarDeFormaTemporariaComCoresPadronizadas = setInterval(function(){
   const x =  Math.floor((Math.random() * 100) + 1);
   const parentDiv = document.getElementById('randomDiv');
   parentDiv.innerHTML = '<span>'+x +'</span>';
   const value = 1;
   for (var i = 1; i <= x; i++) {
    const divChild = document.createElement("div");
    divChild.className = "child";
    divChild.innerHTML = value;
    parentDiv.appendChild(divChild);
    const a  = parentDiv.children;
    const childLength  = parentDiv.children.length;
      if (childLength%2 == 0) {
	  a[i].style.backgroundColor = "#465881"; 	
       }
      if (childLength%3 == 0) {
	  a[i].style.backgroundColor = "#00909e"; 	
      }
       if (childLength%5 == 0) {
	   a[i].style.backgroundColor = "#de6b35"; 	
       }
       value++;
      }
},1200);

// mudar a classe do front/back
const mudar_front_back = (nameClass, colorValue) => {
    elements = document.getElementsByClassName(nameClass);
    for (var i = 0; i <elements.length; i++) {
        elements[i].style.backgroundColor=colorValue;
    }
}

// mudar_front_back("front", "blue")
// mudar_front_back("back", "blue")


// se array estiver nulo 
// se não for carregada nenhum link ou imagem local interna ou externa - utilize cores personalizadas para cartas laterais e traseiras
const checkSRC() => {
  const elem = document.getElementById('cardFront'); // cardFront | cardBack
  const BackgroundRandomColor = `background: ${colorRandom()};`
  if(elem.getAttribute('src') == "") {
    return elem.setAttribute('style', BackgroundRandomColor); 
    // <img class="face back" style="background: red;"> // padrão
    // <img class="face front" style="background: colorRandom();"> aleatório 
    // console.log(colorRandom); // #40b553
  }
  else {
    return elem.getAttribute('src'); 
  }
}

// código para o participante jogar o jogo memoriagame de acordo com um tempo definido, 1:30 por jogo com cores aleatorias
const JogarDeFormaTemporariaComCoresAleatorias = setInterval(function(){
   const x =  Math.floor((Math.random() * 100) + 1);
   const parentDiv = document.getElementById('randomDiv');
   parentDiv.innerHTML = '<span>'+x +'</span>';
   const value = 1;
   for (var i = 1; i <= x; i++) {
    const divChild = document.createElement("div");
    divChild.className = "child";
    divChild.innerHTML = value;
    parentDiv.appendChild(divChild);
    const a  = parentDiv.children;
    const childLength  = parentDiv.children.length;
      if (childLength%2 == 0) {
	  a[i].style.backgroundColor = colorRandom(); 	
       }
      if (childLength%3 == 0) {
	  a[i].style.backgroundColor = colorRandom(); 	
      }
       if (childLength%5 == 0) {
	   a[i].style.backgroundColor = colorRandom(); 	
       }
       value++;
      }
},1200);

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let primeiraCarta = '';
let segundaCarta = '';

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
const imageArray = ["https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cf14db6ed80a0410e229368963e9d8&auto=format&fit=crop&w=1900&q=80", "./css/back.png", "./css/back1.jpg", "https://source.unsplash.com/collection/495468/1600x900"];
const randomNum = Math.floor(Math.random() * imageArray.length);

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
}

const createCarta = (personagens, selectTypeCard) => {
  const carta = createElement('div', 'carta');  
  const front = createElement('img', 'face front');
  const back = createElement('img', 'face back');
  front.src = `./css/image/${personagens}.png`; 
  carta.appendChild(front); 
  back.src = selectTypeCardNow(selectTypeCard); 
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
