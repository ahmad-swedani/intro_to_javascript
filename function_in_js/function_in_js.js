'use strict'

// what is the function and who it's work::

// this is function print from a to z:
function logFromAToZ(a, z) {
    for (var i = a; i <= z; i++) {
        console.log(i);

    }
}
// logFromAToZ(1, 2)
// logFromAToZ(1, 10)
// logFromAToZ(1, 15)

/////////////////////////////////////////

// this fun print sum of 3 numbers

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

// sum(10, 7, 6)

/////////////////////////////////////////


// this fun print multiply of 2 numbers

function mult(num1, num2) {
    console.log(num1 * num2);

}

// mult(2, 6)
// mult(4, 6)
// mult(8, 4)
// mult(10, 7)

/////////////////////////////////////////

// this function take the Your year of birth and return how old are you::

function guessMyAge(x) {
    console.log('your age is' + ' ' + (2020 - x));
}

guessMyAge(1995)