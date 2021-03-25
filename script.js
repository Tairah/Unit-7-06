let numGuess = 0
let num = 0
num = Math.floor(Math.random() *10 )
num = parseFloat(num)

while (numGuess != num) {
  numGuess = prompt('Guess a number between 1 and 16: ')
  numGuess = parseInt(numGuess)
  if (numGuess > num) {
    alert ('You guessed too high, re-guess. ')
  } else if (numGuess < num) {
    alert ('you guessed too low, re-quess. ')
  }
}

if (numGuess === num) {
  alert('You WON!')
}