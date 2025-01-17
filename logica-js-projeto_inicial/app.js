alert("Olá, bem vindo ao jogo do número secreto!");
let numberSecret = parseInt(Math.random() * 11);
let attempts = 1;
let guess;
// vinicius lima dev
while (guess != numberSecret) {
    guess = parseInt(prompt("Escolha um número entre 1 e 10"));
    guess == numberSecret ? alert("Parabéns, você acertou em " + attempts + " tentativas!") 
    : guess > numberSecret ? alert("O número secreto é menor") 
    : alert("O número secreto é maior");
    attempts++;
}