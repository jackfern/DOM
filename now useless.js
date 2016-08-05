function getRandom(){
  return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}

function game(){
  var answer = getRandom();
  var userGuess;
  var guessCount = 0;
  while (userGuess == answer) {
    var userGuess = prompt("Enter a guess between 0-100");
    if (userGuess > answer) {
      alert("Your guess is too high")
    }
    if (userGuess < answer) {
    alert("Your guess is too low")
    }
    guessCount++;
    console.log(guessCount);
  }
  if (userGuess == answer) {
    alert("Congrats, you win!")
  }
}
