//let secret = 7;
let secret = Math.floor(Math.random() * 20) + 1;

// let answer = prompt (“Please guess the secret number (1-20)”);
// var guess = parseInt (answer)
let guess = parseInt(prompt("Please guess the secret number (1-20)"));


// if (guess === secret) {
//     alert("Correct Guess!");
// } else {
//     alert("Sorry, incorrect Guess!");
// }

// while (guess !== secret) {
//     alert("Sorry, incorrect Guess!");
//     guess = parseInt(prompt("Please guess the secret number (1-20)"));
// }

// alert("Correct Guess!");

while (guess !== secret) {
    if (guess < secret) {
        alert("Incorrect, too low");
    } else {
        alert("Incorrect, too high");
    }
    guess = parseInt(prompt("Please guess the secret number (1-20)"));
}

alert("Correct guess!");

