const tabuleiro = document.querySelector('.tabuleiro');
const personagens = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];

// api css variable para manipulação de strings
const getCSSVar = (name, element = document.documentElement) => {
    return window.getComputedStyle(element).getPropertyValue(`--${name}`);
}

const setCSSVar = (name, value, element = document.documentElement) => {
    element.style.setProperty(`--${name}`, value);
}

const removeCSSVar = (name, element = document.documentElement) => {
    element.style.removeProperty(`--${name}`);
}

// remover atributo src da img que não tem link local ou remoto
const reset_if_image_is_null = (nameClass) => {
    elements = document.getElementsByClassName(nameClass);
    for (let i = 0; i <elements.length; i++) {
        if(elements[i].getAttribute('src') == "") {
           return elements[i].removeAttribute('src') //.style.backgroundColor=colorValue; // return elements[i].setAttribute('style', colorValue); // document.getElementById('tst').removeAttribute('src'); 
         }
    }
}

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

// mudar o background_color do front/back
const mudar_background_color = (nameClass, colorValue) => {
    elements = document.getElementsByClassName(nameClass);
    for (var i = 0; i <elements.length; i++) {
        elements[i].style.backgroundColor=colorValue;
    }
}

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
  if (selectObject.value === '5') {
      const arraynew = [""];
      removeCSSVar('--cardImageBack1')
      removeCSSVar('--cardImageBack2')
      removeCSSVar('--cenario')
      mudar_background_color("back", "blue");
      return arraynew[0];
  }  
}

const createCarta = (personagens, selectTypeCard) => {
  const carta = createElement('div', 'carta');  
  const front = createElement('img', 'face front');
  const back = createElement('img', 'face back');
  front.src = `./css/image/${personagens}.png`; 
  carta.appendChild(front); 
  back.src = selectTypeCardNow(selectTypeCard); 
  reset_if_image_is_null('back')
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