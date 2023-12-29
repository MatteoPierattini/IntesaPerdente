var timer = 60; 
var intervalID
var click = 0;

function startTimer() {
  // Iniazializza il timer
  intervalID = setInterval(updateTimer, 1000);
}

function updateTimer() {
  // Decrementa il timer
  timer--;

  // Aggiorna il timer sullo schermo
  document.getElementById("timer").innerHTML = timer;

  // Controlla se il timer è a zero secondi
  if (timer === 0) {
    timer = 60;
    
    document.getElementById("timer").innerHTML = "Tempo!";
    clearInterval(intervalID);

  }
}

async function generateWord() {
  // Leggi i dati del file "parole"
  const risposta = await fetch("/static/parole.txt");
  
  const contenuto = await risposta.text();

  const arrayParole = contenuto.split("\n");

  // Seleziona parola casualmente
  const random = arrayParole[Math.floor(Math.random() * arrayParole.length)];

  // Mostra parola sullo schermo
  document.getElementById("word-container").innerHTML = random;
}

function changeButton() {
  
  const button = document.getElementById("button-word")
  
  if (click === 0) {
    button.style.background = "red";
    button.textContent = "STOP";
    button.style.borderColor = "red";
    click = 1;
    return;
  }

  if (click === 1) {
    button.style.background = "green";
    button.textContent = "PAROLA";
    button.style.borderColor = "green";
    click = 0;
  }
}

function stopTimer() {
  clearInterval(intervalID)
}

// Funzione generale sul click del bottone
function general() {

  if (click === 1) {
    stopTimer();
    changeButton();
    return;
  }

  if (click === 0) {
    startTimer();
    generateWord();
    changeButton();
  }
}
    
      
