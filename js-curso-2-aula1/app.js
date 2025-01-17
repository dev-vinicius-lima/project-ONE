let numeroAleatorio = gerarNumeroSecreto();

let input = document.querySelector('input');
input.innerHTML = 'Escolha um número entre 1 e 10';
input.setAttribute('min', '1');
input.setAttribute('max', '10');

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function gerarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.random() * 11);
    return numeroSecreto;
}

exibirNaTela('h1', "Js Gamer");
exibirNaTela('p', "Escolha um número entre 1 e 10");

function verificarChute() {
    console.log(numeroAleatorio);
}