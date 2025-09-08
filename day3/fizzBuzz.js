/**
 * Problem: FizzBuzz
 * Print numbers from 1 to n.
 * - For multiples of 3, print "Fizz"
 * - For multiples of 5, print "Buzz"
 * - For multiples of both, print "FizzBuzz"
 *
 * Constraints:
 * - 1 <= n <= 10^4
 * - Output should be an array of strings/numbers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) (due to result array)
 */

/**
 * @param {number} n
 * @return {Array<string|number>}
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
