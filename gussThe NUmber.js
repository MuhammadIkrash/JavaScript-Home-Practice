


let RealNumber = Math.round(Math.random() * 100 + 1)
let  UserNumber ;
do {
    UserNumber = Number(prompt('Guess The Number 1 till 100'))
    if (RealNumber == UserNumber) {
        console.log(`You Win The Game . The Correct Number IS ${RealNumber}`);
    } else {
        console.log(`Try Again . The Number Is ${RealNumber} `);
    }
} while (UserNumber === 0)


// let realNumber = Math.floor(Math.random() * 100) + 1;
// let userNumber;

// do {
//     userNumber = Number(prompt('Guess a number between 1 and 100 (Enter 0 to quit):'));

//     if (userNumber === 0) {
//         console.log("Game exited.");
//         break;
//     }

//     if (userNumber === realNumber) {
//         console.log(`Congratulations! You Win. The Correct Number was ${realNumber}.`);
//     } else if (userNumber > realNumber) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Too low! Try again.");
//     }

// } while (userNumber !== realNumber);