/**
 * Problem: Print numbers from 1 to n. 
 * For multiples of 3 print "Fizz" 
 * For multiples of 5 print "Buzz" 
 * For multiples of both, print "FizzBuzz"
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");        
        } else {
            console.log(i);
        }
    }
}

// Test cases:
fizzBuzz(15);
