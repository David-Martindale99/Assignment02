//PROMPT USER FOR TWO INTEGERS
let num1 = parseInt(prompt('Enter first Integer.'))
let num2 = parseInt(prompt('Enter second Integer.'))

//CHECK INTEGERS TO PRINT WHICH IS LARGER
if (num1 > num2) {
    document.write(`${num1} is larger!`)
} else if (num2 > num1) {
    document.write(`${num2} is larger!`)
} else if (num1 === num2) {
    document.write('Both initgeres are equal.')
} else {
    document.write('What did you type in the box?!')
}