/**
 * Problem: Return maximum number in an array of integers.
 * Do not use Math.max 
 * Array length >= 1
 * Numbers can be negative;
 */

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 10, 4, -3, -8, 3, 7, 8, 9, 20]));
console.log(findMax([2, 1, 3, 50, 11]));
console.log(findMax([3, 1, -10, 2]));
