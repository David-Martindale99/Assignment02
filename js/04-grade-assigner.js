//Collect grade value from user
let grade = parseInt(prompt('Enter grade between 1 and 100'))

//Check that value given by user is valid
if (grade < 1 || grade > 100) {
    alert('Only values between 1 and 100 are accepted.')
} else {
    alert(`You entered ${grade}.`)
}

//Assign grade to user input
switch (true) {
    case(grade <= 100 && grade >= 90):
        console.log('You received an A');
        break;
    case(grade <= 89 && grade >= 80):
        console.log('You received a B');
        break;
    case(grade <= 79 && grade >= 70):
        console.log('You received a C')
        break;
    case(grade <= 69 && grade >= 60):
        console.log('You received a D');
        break;
    case(grade < 60 && grade >= 1):
        console.log('You received an F')
        break;
    case(grade > 100 || grade < 1):
        console.log('Not a valid grade')
}

