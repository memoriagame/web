`<h1>Cronometro</h1>
<p><span id="horas">00</span>:<span id="minutos">00</span>:<span id="segundos">00</span>:<span id="milissegundos">00</p>
<button id="iniciar">Iniciar</button>
<button id="pausar">Pausar</button>
<button id="resetar">Resetar</button>`

const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");
const botaoResetar = document.getElementById("resetar");

botaoIniciar.addEventListener("click", iniciar);
botaoPausar.addEventListener("click", pausar);
botaoResetar.addEventListener("click", resetar);

let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let cronometro;
let parado = true;

function iniciar() {
  if (parado) {
    cronometro = setInterval(cronometrar, 10);
    parado = false;
  }
}

function pausar() {
  clearInterval(cronometro);
  parado = true;
}

function resetar() {
  milissegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  
  atualizarHTML();
}

function cronometrar() {
  milissegundos += 10;
  
  if (milissegundos == 1000) {
    milissegundos = 0;
    segundos += 1;
  }
  
  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
  }
  
  if (minutos == 60) {
    minutos = 0;
    horas += 1;
  }
  
  atualizarHTML();
}

function atualizarHTML() {
  const milissegundosHTML = document.getElementById("milissegundos");
  const segundosHTML = document.getElementById("segundos");
  const minutosHTML = document.getElementById("minutos");
  const horasHTML = document.getElementById("horas");
  
  if (milissegundos >= 100) {
    milissegundosHTML.innerText = milissegundos.toString().slice(0, -1);
  } else {
    milissegundosHTML.innerText = "0" + milissegundos.toString().slice(0, -1);
  }
  
  if (segundos >= 10) {
    segundosHTML.innerText = segundos;
  } else {
    segundosHTML.innerText = "0" + segundos;
  }
  
  if (minutos >= 10) {
    minutosHTML.innerText = minutos;
  } else {
    minutosHTML.innerText = "0" + minutos;
  }
  
  if (horas >= 10) {
    horasHTML.innerText = horas;
  } else {
    horasHTML.innerText = "0" + horas;
  }
}

