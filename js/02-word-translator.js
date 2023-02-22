//PROMPT USER FOR LANGAUAGE SELECTION
const langCode = prompt('Please enter a language code (es / de / en / fr)')

//CHECK WHICH LANGAUAGE CODE WAS ENTERED AND DISPLAY THE CORESPONDING "HELLO" OUTPUT
//NOTE: BOTH 'DEFAULT' AND 'EN' OUTPUT ARE HANDLED WITH THE SAME STATMENT,
// IT WOULD BE REDUNDANT TO CODE OTHEWISE
if (langCode === 'es') {
    document.write('Hola Mundo')
} else if (langCode === 'de') {
    document.write('Hallo Walt')
} else if (langCode === 'fr') {
    document.write('Bonjour le monde')
} else {
    document.write('Hello World')
}