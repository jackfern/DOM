var userName;
var guessCount = 0;
var pickles;

// Declaring that the var is randomNumber and we assign a random number using built-in functions.
var randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;

// Decalring a function of getRandomInt
function getRandomInt(){
  // When you run the function it assisngs randomNumber a new random number.
  randomNumber =  Math.floor(Math.random() * (101 - 1)) + 1;
}


function count(){
  if (parseInt(pickles) != pickles) {
    document.getElementById("count").innerHTML = "Numbers Only Please";
  }
  if (pickles == pickles) {
    guessCount++;
    document.getElementById("count").innerHTML = "You have used "+guessCount+" of 7 guesses.";
  }
  if (guessCount == 7) {
    document.getElementById("myBtn").disabled = true;
  }
}

function reset () {
  guessCount = 0;
  document.getElementById("count").innerHTML = "You have used "+ guessCount +" of 7 guesses.";
  document.getElementById("myBtn").disabled = false;
}

// Declaring the game functiong hiLo
function hiLo() {
  // Running the funcing that getRandomInt is in
  // Alerting the user of the random number (we dont need this for us only)

  userName = document.getElementById("userName").value;
  // Declaring a variable that will store the user's guess.
  pickles = document.getElementById("userGuess").value;

    // User eneters their answer
  pickles = document.getElementById("userGuess").value;
    // Checking to see if answer is greater than random number.
    if (pickles > randomNumber) {
      //
      document.getElementById("hint").innerHTML = "Your guess is too high";

    }
  if (pickles < randomNumber){
      document.getElementById("hint").innerHTML = "Your guess is too low";
    }
  if (pickles == randomNumber){
    document.getElementById("hint").innerHTML = "";
    document.getElementById("result").innerHTML = "Congrats! You Win!";  }

  if ((pickles != randomNumber) && (guessCount >= 6)){
    document.getElementById("result").innerHTML = "Sorry, You Lose";}
}
