//Create my Coin 
let coinFlip = Math.round(Math.random())

//Prompt the User to select heads or tails and format the input

let choice = parseInt(prompt('Please type "Heads" or "Tails"'))
choice = choice.toLowerCase()

//Check the result of the coinFlip and diaply the outcome of the User's guess
if (coinFlip === 0) {
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!')
    } else if (choice === 'tails') { 
        alert('The flip was heads but you chose tails...you lose!')
    } else {
        alert('Yay...you broke it!')
    }
} else {
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!')
    } else if (choice === 'tails') {
        alert('The flip was tails and you chose tails...you win!')
    } else {
        alert('Yay...you broke it!')
    }
}