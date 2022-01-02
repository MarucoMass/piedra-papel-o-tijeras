const jugadaJugador = document.getElementById('jugador__jugada');
const jugadaComputadora = document.getElementById('computadora__jugada');
const resultadoJugador = document.getElementById('jugador__score');
const resultadoComputadora = document.getElementById('computadora__score');
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
var jugadorWin = true;
var computadoraWin = true;
var puntoJugador = 0;
var puntoComputadora = 0;
let jugada;
let jugada2;


const jugadasPosibles = document.querySelectorAll('button');

jugadasPosibles.forEach(jugadaPosible => jugadaPosible.addEventListener('click', (e) => {
    jugada = e.target.innerText;
    jugadaJugador.innerHTML = jugada;
    jugadaRandomComputadora();
    resultadoJuego();
    empate();
}))

function jugadaRandomComputadora(){
    const random = Math.floor(Math.random() * jugadasPosibles.length);
    if (random === 0) {
        jugada2 = piedra.innerText;
    }
    if (random === 1) {
        jugada2 = papel.innerText;
    }
    if (random === 2) {
        jugada2 = tijera.innerText;
    }
    jugadaComputadora.innerHTML = jugada2;
}

function resultadoJuego(){
    if (jugada === piedra.innerText && jugada2 === tijera.innerText) {
        puntoJugador++;
        resultadoJugador.innerHTML =  puntoJugador;
        jugadaComputadora.classList.add('loser');
        jugadaJugador.classList.remove('loser');
    }
    if (jugada === piedra.innerText && jugada2 === papel.innerText) {
        puntoComputadora++;
        resultadoComputadora.innerHTML = puntoComputadora;
        jugadaJugador.classList.add('loser');
        jugadaComputadora.classList.remove('loser');
    }
    if (jugada === tijera.innerText && jugada2 === piedra.innerText) {
        puntoComputadora++;
        resultadoComputadora.innerHTML = puntoComputadora;
        jugadaJugador.classList.add('loser');
        jugadaComputadora.classList.remove('loser');
    }
    if (jugada === tijera.innerText && jugada2 === papel.innerText) {
        puntoJugador++;
        resultadoJugador.innerHTML = puntoJugador;
        jugadaComputadora.classList.add('loser');
        jugadaJugador.classList.remove('loser');
    }
    if (jugada === papel.innerText && jugada2 === piedra.innerText) {
        puntoJugador++;
        resultadoJugador.innerHTML = puntoJugador;
        jugadaComputadora.classList.add('loser');
        jugadaJugador.classList.remove('loser');
    }
    if (jugada === papel.innerText && jugada2 === tijera.innerText) {
        puntoComputadora++;
        resultadoComputadora.innerHTML = puntoComputadora;
        jugadaJugador.classList.add('loser');
        jugadaComputadora.classList.remove('loser');
    }
}

function empate(){
    if (jugada === piedra.innerText && jugada2 === piedra.innerText) {
        jugadaComputadora.classList.remove('loser');
        jugadaJugador.classList.remove('loser');
    }
    if (jugada === papel.innerText && jugada2 === papel.innerText) {
        jugadaComputadora.classList.remove('loser');
        jugadaJugador.classList.remove('loser');
    }
    if (jugada === tijera.innerText && jugada2 === tijera.innerText) {
        jugadaComputadora.classList.remove('loser');
        jugadaJugador.classList.remove('loser');
    }
}