let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Guess a single letter or click 'Cancel' to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only.")
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
if (guess === null) {
    alert(answerArray.join(" "));
    alert("Sorry to see you quit. The answer was " + word);
} else {
    alert(answerArray.join(" "));
    alert("Good job!");
}

