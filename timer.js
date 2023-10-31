var timer = 60; // The number of seconds in the countdown timer
var intervalID
var click = 0;

    function startTimer() {
      // Start the timer
      intervalID = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      // Decrement the timer by one second
      timer--;

      // Update the timer display
      document.getElementById("timer").innerHTML = timer;

      // Check if the timer has expired
      if (timer === 0) {
        timer = 60;
        // Display a message that the timer has expired
        document.getElementById("timer").innerHTML = "Tempo finito!";
        clearInterval(intervalID);

      }
    }

    async function generateWord() {
      // Fetch the text file contents.
      const response = await fetch("/static/parole.txt");
    
      // Get the text file contents.
      const textFileContents = await response.text();
    
      // Split the text file contents into an array of words.
      const wordsArray = textFileContents.split("\n");
    
      // Get a random word from the array.
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    
      // Display the random word in the word-container div.
      document.getElementById("word-container").innerHTML = randomWord;
    }
    
    function changeButton() {
      
      const button = document.getElementById("button-word")
      
      if (click === 0) {
        // Change the button's color
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
    
      