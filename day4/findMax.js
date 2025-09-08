/**
 * Problem: Find Maximum in an Array
 * Given an array of integers, return the maximum element.
 * - Do not use Math.max
 * - Array length >= 1
 * - Numbers can be negative
 *
 * Constraints:
 * - 1 <= arr.length <= 10^5
 * - -10^9 <= arr[i] <= 10^9
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @return {number}
 */

function findMax(arr) {
    let max = arr[0];
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
