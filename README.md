# 📘 **100 Days of JavaScript Challenge**

## 🟢 Part 1 – Core JavaScript Mastery (Days 1–20)

---

### **Day 1 – Reverse a String**

**Problem:**
Write a function that takes a string and returns it reversed. Do not use the built-in `.reverse()` method.

**Constraints:**

* Input string length ≤ 1000
* Must use iteration or recursion

**Starter Code:**

```javascript
function reverseString(str) {
    // TODO
}

console.log(reverseString("hello"));
```

**Test Cases:**

```
Input: "hello"
Output: "olleh"

Input: "JavaScript"
Output: "tpircSavaJ"

Input: "a"
Output: "a"
```

---

### **Day 2 – Palindrome Check**

**Problem:**
Check if a given string is a palindrome (reads the same forward and backward). Ignore spaces and case.

**Constraints:**

* Input contains only alphanumeric and spaces
* Return `true` or `false`

**Starter Code:**

```javascript
function isPalindrome(str) {
    // TODO
}

console.log(isPalindrome("Race car"));
```

**Test Cases:**

```
Input: "Race car"
Output: true

Input: "hello"
Output: false

Input: "A man a plan a canal Panama"
Output: true
```

---

### **Day 3 – FizzBuzz**

**Problem:**
Print numbers from 1 to `n`.

* For multiples of 3 print `"Fizz"`.
* For multiples of 5 print `"Buzz"`.
* For multiples of both, print `"FizzBuzz"`.

**Constraints:**

* `1 <= n <= 1000`

**Starter Code:**

```javascript
function fizzBuzz(n) {
    // TODO
}

fizzBuzz(15);
```

**Test Cases:**

```
Input: 15
Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

---

### **Day 4 – Find Maximum in Array**

**Problem:**
Return the maximum number in an array of integers. Do not use `Math.max`.

**Constraints:**

* Array length ≥ 1
* Numbers can be negative

**Starter Code:**

```javascript
function findMax(arr) {
    // TODO
}

console.log(findMax([1, 3, 7, 2, 9]));
```

**Test Cases:**

```
Input: [1, 3, 7, 2, 9]
Output: 9

Input: [-5, -1, -10]
Output: -1
```

---

### **Day 5 – Factorial (Recursion)**

**Problem:**
Write a recursive function to compute the factorial of a number `n`.

**Constraints:**

* `0 <= n <= 15`

**Starter Code:**

```javascript
function factorial(n) {
    // TODO
}

console.log(factorial(5));
```

**Test Cases:**

```
Input: 5
Output: 120

Input: 0
Output: 1
```

---

### **Day 6 – Fibonacci Sequence**

**Problem:**
Return the `n`th Fibonacci number (0-indexed).

**Constraints:**

* `0 <= n <= 30`

**Starter Code:**

```javascript
function fibonacci(n) {
    // TODO
}

console.log(fibonacci(7));
```

**Test Cases:**

```
Input: 7
Output: 13

Input: 0
Output: 0

Input: 1
Output: 1
```

---

### **Day 7 – Reverse Words in a Sentence**

**Problem:**
Reverse the order of words in a sentence (not the characters).

**Constraints:**

* Words separated by single spaces
* No built-in reverse allowed

**Starter Code:**

```javascript
function reverseWords(sentence) {
    // TODO
}

console.log(reverseWords("I love JavaScript"));
```

**Test Cases:**

```
Input: "I love JavaScript"
Output: "JavaScript love I"

Input: "Hello world"
Output: "world Hello"
```

---

### **Day 8 – Remove Duplicates from Array**

**Problem:**
Remove duplicate numbers from an array and return the unique elements.

**Constraints:**

* Maintain order of first occurrences

**Starter Code:**

```javascript
function removeDuplicates(arr) {
    // TODO
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
```

**Test Cases:**

```
Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]

Input: [5, 5, 5]
Output: [5]
```

---

### **Day 9 – Count Vowels**

**Problem:**
Count how many vowels (`a, e, i, o, u`) appear in a string.

**Constraints:**

* Ignore case

**Starter Code:**

```javascript
function countVowels(str) {
    // TODO
}

console.log(countVowels("JavaScript"));
```

**Test Cases:**

```
Input: "JavaScript"
Output: 3

Input: "HELLO"
Output: 2
```

---

### **Day 10 – Anagram Check**

**Problem:**
Check if two strings are anagrams (contain the same characters, different order).

**Constraints:**

* Ignore spaces and case

**Starter Code:**

```javascript
function areAnagrams(str1, str2) {
    // TODO
}

console.log(areAnagrams("listen", "silent"));
```

**Test Cases:**

```
Input: "listen", "silent"
Output: true

Input: "hello", "world"
Output: false
```

---

### **Day 11 – Sum of Digits**

**Problem:**
Return the sum of all digits of a number.

**Constraints:**

* Input is a non-negative integer

**Starter Code:**

```javascript
function sumDigits(num) {
    // TODO
}

console.log(sumDigits(123));
```

**Test Cases:**

```
Input: 123
Output: 6

Input: 9999
Output: 36
```

---

### **Day 12 – Find Missing Number**

**Problem:**
Given an array of size `n` containing numbers from `1` to `n+1` (with one missing), find the missing number.

**Constraints:**

* Array length ≥ 1

**Starter Code:**

```javascript
function findMissingNumber(arr) {
    // TODO
}

console.log(findMissingNumber([1, 2, 4, 5]));
```

**Test Cases:**

```
Input: [1, 2, 4, 5]
Output: 3

Input: [2, 3, 1, 5]
Output: 4
```

---

### **Day 13 – Second Largest Number**

**Problem:**
Find the second largest number in an array.

**Constraints:**

* Array length ≥ 2

**Starter Code:**

```javascript
function secondLargest(arr) {
    // TODO
}

console.log(secondLargest([10, 20, 4, 5, 99]));
```

**Test Cases:**

```
Input: [10, 20, 4, 5, 99]
Output: 20

Input: [5, 5, 5, 5]
Output: undefined
```

---

### **Day 14 – Capitalize Words**

**Problem:**
Capitalize the first letter of each word in a sentence.

**Starter Code:**

```javascript
function capitalizeWords(sentence) {
    // TODO
}

console.log(capitalizeWords("i love javascript"));
```

**Test Cases:**

```
Input: "i love javascript"
Output: "I Love JavaScript"

Input: "hello world"
Output: "Hello World"
```

---

### **Day 15 – Find Intersection of Arrays**

**Problem:**
Return the intersection (common elements) of two arrays.

**Starter Code:**

```javascript
function arrayIntersection(arr1, arr2) {
    // TODO
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));
```

**Test Cases:**

```
Input: [1, 2, 3], [2, 3, 4]
Output: [2, 3]

Input: [5, 6], [7, 8]
Output: []
```

---

### **Day 16 – Check Prime Number**

**Problem:**
Check if a number is prime.

**Constraints:**

* `n >= 2`

**Starter Code:**

```javascript
function isPrime(n) {
    // TODO
}

console.log(isPrime(7));
```

**Test Cases:**

```
Input: 7
Output: true

Input: 10
Output: false
```

---

### **Day 17 – Rotate Array**

**Problem:**
Rotate an array to the right by `k` steps.

**Constraints:**

* `0 <= k <= arr.length`

**Starter Code:**

```javascript
function rotateArray(arr, k) {
    // TODO
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

**Test Cases:**

```
Input: [1, 2, 3, 4, 5], k=2
Output: [4, 5, 1, 2, 3]

Input: [10, 20, 30], k=1
Output: [30, 10, 20]
```

---

### **Day 18 – Flatten Nested Array**

**Problem:**
Flatten a nested array into a single-level array.

**Starter Code:**

```javascript
function flattenArray(arr) {
    // TODO
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
```

**Test Cases:**

```
Input: [1, [2, [3, 4]], 5]
Output: [1, 2, 3, 4, 5]

Input: [[1], [2, 3]]
Output: [1, 2, 3]
```

---

### **Day 19 – Longest Word in Sentence**

**Problem:**
Return the longest word in a sentence.

**Starter Code:**

```javascript
function longestWord(sentence) {
    // TODO
}

console.log(longestWord("I love programming in JavaScript"));
```

**Test Cases:**

```
Input: "I love programming in JavaScript"
Output: "programming"

Input: "Hi there"
Output: "there"
```

---

### **Day 20 – Count Character Frequency**

**Problem:**
Return a frequency map of characters in a string.

**Starter Code:**

```javascript
function charFrequency(str) {
    // TODO
}

console.log(charFrequency("hello"));
```

**Test Cases:**

```
Input: "hello"
Output: { h:1, e:1, l:2, o:1 }

Input: "JavaScript"
Output: { J:1, a:2, v:1, S:1, c:1, r:1, i:1, p:1, t:1 }
```

---


Perfect 👍 We’ll rewrite **Days 41–60 (Algorithms)** in **full LeetCode-style format** — with **detailed descriptions, input/output, constraints, starter code, and sample test cases**.

Here we go 🚀

---

# 📘 **100 Days of JavaScript Challenge**

## 🔵 Part 3 – Algorithms (Days 41–60)

---

### **Day 41 – Bubble Sort**

**Problem Statement:**
Given an array of integers, implement the **Bubble Sort algorithm** to sort the array in ascending order. You must sort the array in-place without using built-in sorting functions like `.sort()`.

**Input:**

* An array of integers `arr`.

**Output:**

* The sorted array in ascending order.

**Constraints:**

* `1 <= arr.length <= 10^4`
* `-10^4 <= arr[i] <= 10^4`

**Starter Code:**

```javascript
function bubbleSort(arr) {
    // TODO: Implement bubble sort
}
```

**Example Test Cases:**

```
Input: [5, 2, 9, 1, 5, 6]
Output: [1, 2, 5, 5, 6, 9]

Input: [3, 0, -2, 10]
Output: [-2, 0, 3, 10]
```

---

### **Day 42 – Selection Sort**

**Problem Statement:**
Implement the **Selection Sort algorithm** to sort an array of integers in ascending order. Do not use built-in sort functions.

**Input:**

* An array of integers `arr`.

**Output:**

* The sorted array in ascending order.

**Constraints:**

* `1 <= arr.length <= 10^4`
* `-10^4 <= arr[i] <= 10^4`

**Starter Code:**

```javascript
function selectionSort(arr) {
    // TODO: Implement selection sort
}
```

**Example Test Cases:**

```
Input: [64, 25, 12, 22, 11]
Output: [11, 12, 22, 25, 64]
```

---

### **Day 43 – Insertion Sort**

**Problem Statement:**
Implement the **Insertion Sort algorithm** to sort an array of integers in ascending order.

**Input:**

* An array of integers `arr`.

**Output:**

* The sorted array in ascending order.

**Constraints:**

* `1 <= arr.length <= 5000`
* `-10^4 <= arr[i] <= 10^4`

**Starter Code:**

```javascript
function insertionSort(arr) {
    // TODO: Implement insertion sort
}
```

**Example Test Cases:**

```
Input: [12, 11, 13, 5, 6]
Output: [5, 6, 11, 12, 13]
```

---

### **Day 44 – Merge Sort**

**Problem Statement:**
Implement **Merge Sort**, a divide-and-conquer sorting algorithm.

**Input:**

* An array of integers `arr`.

**Output:**

* The sorted array in ascending order.

**Constraints:**

* `1 <= arr.length <= 10^5`
* `-10^9 <= arr[i] <= 10^9`

**Starter Code:**

```javascript
function mergeSort(arr) {
    // TODO: Implement merge sort
}
```

**Example Test Cases:**

```
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]
```

---

### **Day 45 – Quick Sort**

**Problem Statement:**
Implement **Quick Sort**, a divide-and-conquer sorting algorithm.

**Input:**

* An array of integers `arr`.

**Output:**

* The sorted array in ascending order.

**Constraints:**

* `1 <= arr.length <= 10^5`
* `-10^9 <= arr[i] <= 10^9`

**Starter Code:**

```javascript
function quickSort(arr) {
    // TODO: Implement quick sort
}
```

**Example Test Cases:**

```
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]
```

---

### **Day 46 – Binary Search (Iterative & Recursive)**

**Problem Statement:**
Given a sorted array of integers and a target value, implement **Binary Search** to return the index of the target. If the target is not found, return `-1`. Implement both iterative and recursive versions.

**Input:**

* A sorted array `arr`
* An integer `target`

**Output:**

* Index of `target` if found, otherwise `-1`

**Constraints:**

* `1 <= arr.length <= 10^5`
* `-10^9 <= arr[i], target <= 10^9`

**Starter Code:**

```javascript
function binarySearch(arr, target) {
    // TODO: Implement binary search
}
```

**Example Test Cases:**

```
Input: arr=[1,2,3,4,5], target=3
Output: 2

Input: arr=[1,2,3,4,5], target=6
Output: -1
```

---


Great 🚀 Let’s continue with **Days 47–60**, rewritten in **full LeetCode-style descriptions**.

---

# 📘 **100 Days of JavaScript Challenge**

## 🔵 Part 3 – Algorithms (Days 41–60, Continued)

---

### **Day 47 – Find Peak Element**

**Problem Statement:**
A peak element is an element that is greater than its neighbors. Given an array of integers, return the index of any one peak element. You may assume that the array does not contain adjacent equal elements.

**Input:**

* An array of integers `nums`.

**Output:**

* Index of any peak element.

**Constraints:**

* `1 <= nums.length <= 10^5`
* `-10^9 <= nums[i] <= 10^9`

**Starter Code:**

```javascript
function findPeakElement(nums) {
    // TODO: Implement peak finding
}
```

**Example Test Cases:**

```
Input: [1,2,3,1]
Output: 2  (nums[2] = 3 is a peak)

Input: [1,2,1,3,5,6,4]
Output: 5  (nums[5] = 6 is a peak)
```

---

### **Day 48 – Sliding Window Maximum**

**Problem Statement:**
You are given an array of integers and an integer `k`. Return the maximum value in each sliding window of size `k`.

**Input:**

* `nums`: array of integers
* `k`: integer window size

**Output:**

* Array of maximums for each window.

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= k <= nums.length`
* `-10^9 <= nums[i] <= 10^9`

**Starter Code:**

```javascript
function maxSlidingWindow(nums, k) {
    // TODO: Implement sliding window maximum
}
```

**Example Test Cases:**

```
Input: nums=[1,3,-1,-3,5,3,6,7], k=3
Output: [3,3,5,5,6,7]
```

---

### **Day 49 – Longest Substring Without Repeating Characters**

**Problem Statement:**
Given a string `s`, find the length of the **longest substring without repeating characters**.

**Input:**

* String `s`

**Output:**

* Integer length of longest substring.

**Constraints:**

* `0 <= s.length <= 5 * 10^4`
* `s` consists of English letters, digits, symbols, and spaces.

**Starter Code:**

```javascript
function lengthOfLongestSubstring(s) {
    // TODO: Implement sliding window
}
```

**Example Test Cases:**

```
Input: "abcabcbb"
Output: 3   ("abc")

Input: "bbbbb"
Output: 1   ("b")

Input: "pwwkew"
Output: 3   ("wke")
```

---

### **Day 50 – Minimum Window Substring**

**Problem Statement:**
Given two strings `s` and `t`, return the minimum window in `s` which contains all characters of `t`. If no such window exists, return an empty string.

**Input:**

* String `s`
* String `t`

**Output:**

* Smallest substring of `s` containing all characters of `t`.

**Constraints:**

* `1 <= s.length, t.length <= 10^5`
* `s` and `t` consist of English letters.

**Starter Code:**

```javascript
function minWindow(s, t) {
    // TODO: Implement sliding window with frequency maps
}
```

**Example Test Cases:**

```
Input: s="ADOBECODEBANC", t="ABC"
Output: "BANC"
```

---

### **Day 51 – Container With Most Water**

**Problem Statement:**
Given an array `height` of non-negative integers where each represents a vertical line, find the two lines that together with the x-axis form a container that holds the most water.

**Input:**

* `height`: array of integers

**Output:**

* Maximum water area possible.

**Constraints:**

* `2 <= height.length <= 10^5`
* `0 <= height[i] <= 10^4`

**Starter Code:**

```javascript
function maxArea(height) {
    // TODO: Implement two-pointer approach
}
```

**Example Test Cases:**

```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

---

### **Day 52 – Trapping Rain Water**

**Problem Statement:**
Given an array `height` representing an elevation map, compute how much water can be trapped after raining.

**Input:**

* `height`: array of integers

**Output:**

* Integer amount of trapped water.

**Constraints:**

* `1 <= height.length <= 2 * 10^4`
* `0 <= height[i] <= 10^5`

**Starter Code:**

```javascript
function trap(height) {
    // TODO: Implement two-pointer / prefix max approach
}
```

**Example Test Cases:**

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

---

### **Day 53 – Coin Change (Dynamic Programming)**

**Problem Statement:**
You are given coins of different denominations and an amount. Return the fewest number of coins needed to make up that amount. If it cannot be made, return `-1`.

**Input:**

* Array of integers `coins`
* Integer `amount`

**Output:**

* Minimum number of coins or `-1`

**Constraints:**

* `1 <= coins.length <= 12`
* `1 <= amount <= 10^4`
* `1 <= coins[i] <= 2^31 - 1`

**Starter Code:**

```javascript
function coinChange(coins, amount) {
    // TODO: Implement DP
}
```

**Example Test Cases:**

```
Input: coins=[1,2,5], amount=11
Output: 3  (11 = 5+5+1)

Input: coins=[2], amount=3
Output: -1
```

---

### **Day 54 – Longest Increasing Subsequence**

**Problem Statement:**
Given an integer array `nums`, return the length of the **longest strictly increasing subsequence**.

**Input:**

* `nums`: array of integers

**Output:**

* Length of longest increasing subsequence

**Constraints:**

* `1 <= nums.length <= 2500`
* `-10^4 <= nums[i] <= 10^4`

**Starter Code:**

```javascript
function lengthOfLIS(nums) {
    // TODO: Implement DP with binary search
}
```

**Example Test Cases:**

```
Input: [10,9,2,5,3,7,101,18]
Output: 4   ([2,3,7,101])
```

---

### **Day 55 – Maximum Subarray (Kadane’s Algorithm)**

**Problem Statement:**
Find the contiguous subarray with the largest sum.

**Input:**

* `nums`: array of integers

**Output:**

* Maximum subarray sum

**Constraints:**

* `1 <= nums.length <= 10^5`
* `-10^4 <= nums[i] <= 10^4`

**Starter Code:**

```javascript
function maxSubArray(nums) {
    // TODO: Implement Kadane's Algorithm
}
```

**Example Test Cases:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6   ([4,-1,2,1])
```

---

### **Day 56 – Unique Paths (Dynamic Programming)**

**Problem Statement:**
A robot is located at the top-left corner of an `m x n` grid. It can only move right or down. Find the number of unique paths to reach the bottom-right corner.

**Input:**

* Integers `m`, `n`

**Output:**

* Number of unique paths

**Constraints:**

* `1 <= m, n <= 100`

**Starter Code:**

```javascript
function uniquePaths(m, n) {
    // TODO: Implement DP
}
```

**Example Test Cases:**

```
Input: m=3, n=7
Output: 28
```

---

### **Day 57 – Climbing Stairs (Dynamic Programming)**

**Problem Statement:**
You are climbing a staircase with `n` steps. You can climb either 1 or 2 steps at a time. Return the number of distinct ways to climb to the top.

**Input:**

* Integer `n`

**Output:**

* Number of ways to reach the top

**Constraints:**

* `1 <= n <= 45`

**Starter Code:**

```javascript
function climbStairs(n) {
    // TODO: Implement Fibonacci DP
}
```

**Example Test Cases:**

```
Input: n=2
Output: 2

Input: n=3
Output: 3
```

---

### **Day 58 – Word Ladder**

**Problem Statement:**
Given two words `beginWord` and `endWord`, and a dictionary word list, return the length of the shortest transformation sequence from `beginWord` to `endWord`. Each transformation changes only one letter and must be in the word list.

**Input:**

* `beginWord`: string
* `endWord`: string
* `wordList`: array of strings

**Output:**

* Length of shortest transformation sequence or `0` if none

**Constraints:**

* `1 <= wordList.length <= 5000`
* All words are of same length and lowercase

**Starter Code:**

```javascript
function ladderLength(beginWord, endWord, wordList) {
    // TODO: Implement BFS
}
```

**Example Test Cases:**

```
Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]
Output: 5  (hit -> hot -> dot -> dog -> cog)
```

---

### **Day 59 – Dijkstra’s Algorithm**

**Problem Statement:**
Given a weighted graph represented as an adjacency list, implement **Dijkstra’s algorithm** to find the shortest path from a given start node to all other nodes.

**Input:**

* Graph as adjacency list `{node: [[neighbor, weight], ...]}`
* Start node

**Output:**

* Shortest distance from start node to all nodes

**Constraints:**

* Non-negative edge weights
* Graph can have up to `10^5` nodes and edges

**Starter Code:**

```javascript
function dijkstra(graph, start) {
    // TODO: Implement Dijkstra’s algorithm
}
```

**Example Test Cases:**

```
Input: graph = { 
  A: [["B", 1], ["C", 4]], 
  B: [["C", 2], ["D", 5]], 
  C: [["D", 1]], 
  D: [] 
}, start="A"
Output: { A:0, B:1, C:3, D:4 }
```

---

### **Day 60 – Bellman-Ford Algorithm**

**Problem Statement:**
Implement **Bellman-Ford algorithm** to compute shortest distances from a source node to all other nodes in a weighted graph. The graph may contain negative weights. If a negative cycle exists, return an error.

**Input:**

* Number of vertices `V`
* Edge list `E = [[u, v, w], ...]`
* Source node `src`

**Output:**

* Shortest distances or indicate a negative cycle

**Constraints:**

* `1 <= V <= 5000`
* `1 <= E.length <= 10^4`
* `-10^4 <= w <= 10^4`

**Starter Code:**

```javascript
function bellmanFord(graph, V, E, src) {
    // TODO: Implement Bellman-Ford
}
```

**Example Test Cases:**

```
Input: V=5, E=[[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[1,4,2],[3,2,5],[3,1,1],[4,3,-3]], src=0
Output: [0, -1, 2, -2, 1]
```

---


Perfect 🚀 Let’s dive into **Part 4 – Deep JavaScript (Days 61–80)**.
Here, the challenges are less about raw DSA and more about **critical JS concepts, internals, async handling, polyfills, and patterns**.

I’ll follow the same **full LeetCode-style format** with:

* Problem statement
* Input / Output
* Constraints
* Starter code
* Example test cases

---

# 📘 **100 Days of JavaScript Challenge**

## 🟣 Part 4 – Deep JavaScript (Days 61–80)

---

### **Day 61 – Implement `Array.prototype.map` (Polyfill)**

**Problem Statement:**
Implement your own version of the `map` function for arrays. It should behave exactly like `Array.prototype.map`.

**Input:**

* An array `arr`
* A callback function `fn(element, index, array)`

**Output:**

* A new array with the results of calling the provided function on each element.

**Constraints:**

* Do not use `Array.prototype.map`.

**Starter Code:**

```javascript
Array.prototype.myMap = function(callback) {
    // TODO: Implement custom map
};
```

**Example Test Cases:**

```
Input: [1,2,3].myMap(x => x * 2)
Output: [2,4,6]
```

---

### **Day 62 – Implement `Array.prototype.filter` (Polyfill)**

**Problem Statement:**
Implement your own version of the `filter` function for arrays.

**Input:**

* An array `arr`
* A callback function `fn(element, index, array)`

**Output:**

* A new array with elements that pass the test.

**Starter Code:**

```javascript
Array.prototype.myFilter = function(callback) {
    // TODO
};
```

**Example Test Cases:**

```
Input: [1,2,3,4].myFilter(x => x % 2 === 0)
Output: [2,4]
```

---

### **Day 63 – Implement `Array.prototype.reduce` (Polyfill)**

**Problem Statement:**
Implement your own version of the `reduce` function for arrays.

**Input:**

* An array `arr`
* A callback function `fn(acc, current, index, array)`
* An optional initial value

**Output:**

* The final accumulated value.

**Starter Code:**

```javascript
Array.prototype.myReduce = function(callback, initialValue) {
    // TODO
};
```

**Example Test Cases:**

```
Input: [1,2,3,4].myReduce((a,b) => a+b, 0)
Output: 10
```

---

### **Day 64 – Implement `Function.prototype.bind`**

**Problem Statement:**
Write a polyfill for `Function.prototype.bind` that returns a new function with `this` bound to the provided value.

**Input:**

* A function `fn`
* A value to bind as `this`

**Output:**

* A new function with bound `this`.

**Starter Code:**

```javascript
Function.prototype.myBind = function(context, ...args) {
    // TODO
};
```

**Example Test Cases:**

```
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const greetHello = greet.myBind(null, "Hello");
Output: greetHello("John") -> "Hello, John!"
```

---

### **Day 65 – Implement `call` and `apply`**

**Problem Statement:**
Implement custom versions of `Function.prototype.call` and `Function.prototype.apply`.

**Input:**

* A function `fn`
* A context object
* Arguments (spread or array)

**Output:**

* Result of the function called with bound context.

**Starter Code:**

```javascript
Function.prototype.myCall = function(context, ...args) {
    // TODO
};

Function.prototype.myApply = function(context, args) {
    // TODO
};
```

**Example Test Cases:**

```
function add(a,b) { return this.x + a + b; }
const obj = { x: 10 };
add.myCall(obj, 5, 2) -> 17
add.myApply(obj, [5,2]) -> 17
```

---

### **Day 66 – Implement `debounce`**

**Problem Statement:**
Write a function `debounce(fn, delay)` that delays execution of `fn` until after `delay` milliseconds have passed since the last time it was called.

**Input:**

* A function `fn`
* A delay in ms

**Output:**

* A debounced function

**Starter Code:**

```javascript
function debounce(fn, delay) {
    // TODO
}
```

**Example Test Cases:**

```
Input: Call debounced function multiple times quickly
Output: Only one call executes after delay
```

---

### **Day 67 – Implement `throttle`**

**Problem Statement:**
Write a function `throttle(fn, delay)` that ensures `fn` is executed at most once every `delay` ms.

**Input:**

* A function `fn`
* A delay in ms

**Output:**

* A throttled function

**Starter Code:**

```javascript
function throttle(fn, delay) {
    // TODO
}
```

**Example Test Cases:**

```
Input: Call throttled function multiple times within delay
Output: Only one call executes every delay period
```

---

### **Day 68 – Implement `Promise.all`**

**Problem Statement:**
Implement a polyfill for `Promise.all(promises)` that resolves when all promises resolve or rejects if any fail.

**Input:**

* An array of promises

**Output:**

* A promise that resolves to an array of results or rejects with the first error.

**Starter Code:**

```javascript
function myPromiseAll(promises) {
    // TODO
}
```

**Example Test Cases:**

```
Input: myPromiseAll([Promise.resolve(1), Promise.resolve(2)])
Output: Promise -> [1,2]
```

---

### **Day 69 – Implement `Promise.race`**

**Problem Statement:**
Implement `Promise.race(promises)` which resolves or rejects as soon as one promise resolves or rejects.

**Input:**

* An array of promises

**Output:**

* A promise that settles with the first one to complete.

**Starter Code:**

```javascript
function myPromiseRace(promises) {
    // TODO
}
```

**Example Test Cases:**

```
Input: myPromiseRace([Promise.resolve("fast"), new Promise(r => setTimeout(() => r("slow"), 1000))])
Output: "fast"
```

---

### **Day 70 – Implement `Promise.any`**

**Problem Statement:**
Implement `Promise.any(promises)` which resolves once any promise resolves, or rejects if all fail.

**Input:**

* An array of promises

**Output:**

* A promise that resolves with the first resolved value, or rejects with all errors.

**Starter Code:**

```javascript
function myPromiseAny(promises) {
    // TODO
}
```

**Example Test Cases:**

```
Input: myPromiseAny([Promise.reject("err"), Promise.resolve("success")])
Output: "success"
```

---

### **Day 71 – Event Emitter**

**Problem Statement:**
Design and implement an `EventEmitter` class supporting `on`, `emit`, `off`, and `once`.

**Input:**

* Events and callbacks

**Output:**

* Callbacks triggered correctly

**Starter Code:**

```javascript
class EventEmitter {
    constructor() {
        // TODO
    }
    on(event, listener) {}
    off(event, listener) {}
    once(event, listener) {}
    emit(event, ...args) {}
}
```

**Example Test Cases:**

```
const emitter = new EventEmitter();
emitter.on("greet", name => console.log("Hello " + name));
emitter.emit("greet", "Alice");  // "Hello Alice"
```

---

### **Day 72 – Curry Function**

**Problem Statement:**
Implement a function `curry(fn)` that transforms a function with multiple arguments into a sequence of functions each taking one argument.

**Input:**

* A function `fn`

**Output:**

* Curried version of the function

**Starter Code:**

```javascript
function curry(fn) {
    // TODO
}
```

**Example Test Cases:**

```
function add(a,b,c) { return a+b+c; }
const curried = curry(add);
curried(1)(2)(3) -> 6
```

---

### **Day 73 – Implement Deep Clone**

**Problem Statement:**
Implement a function `deepClone(obj)` that makes a deep copy of an object, handling nested objects and arrays.

**Input:**

* Object `obj`

**Output:**

* Deep cloned object

**Constraints:**

* No use of `structuredClone` or `JSON.parse(JSON.stringify())`.

**Starter Code:**

```javascript
function deepClone(obj) {
    // TODO
}
```

**Example Test Cases:**

```
Input: {a:1, b:{c:2}}
Output: Deep copy (modifying clone does not affect original)
```

---

### **Day 74 – Flatten Nested Array**

**Problem Statement:**
Implement a function `flatten(arr)` that flattens a nested array to a single-level array.

**Input:**

* Array `arr`

**Output:**

* Flattened array

**Starter Code:**

```javascript
function flatten(arr) {
    // TODO
}
```

**Example Test Cases:**

```
Input: [1,[2,[3,[4]]]]
Output: [1,2,3,4]
```

---

### **Day 75 – Implement Memoization**

**Problem Statement:**
Write a function `memoize(fn)` that caches results for given arguments to improve performance.

**Input:**

* A function `fn`

**Output:**

* A memoized function

**Starter Code:**

```javascript
function memoize(fn) {
    // TODO
}
```

**Example Test Cases:**

```
const slowFib = n => n<=1 ? n : slowFib(n-1)+slowFib(n-2);
const fastFib = memoize(slowFib);
fastFib(35) -> Much faster on repeated calls
```

---

### **Day 76 – Implement `setTimeout` with `setInterval`**

**Problem Statement:**
Implement your own `setTimeout` using `setInterval`.

**Input:**

* Callback `fn`
* Delay `ms`

**Output:**

* Execute function after delay

**Starter Code:**

```javascript
function customSetTimeout(fn, delay) {
    // TODO
}
```

**Example Test Cases:**

```
customSetTimeout(() => console.log("Hello"), 1000);
// Prints "Hello" after 1 second
```

---

### **Day 77 – Implement `setInterval` with `setTimeout`**

**Problem Statement:**
Implement your own `setInterval` using recursive `setTimeout`.

**Input:**

* Callback `fn`
* Interval `ms`

**Output:**

* Executes repeatedly every interval

**Starter Code:**

```javascript
function customSetInterval(fn, delay) {
    // TODO
}
```

**Example Test Cases:**

```
customSetInterval(() => console.log("tick"), 1000);
```

---

### **Day 78 – Implement `once` Function**

**Problem Statement:**
Implement a function `once(fn)` that returns a function which runs `fn` only once, no matter how many times it’s called.

**Input:**

* Function `fn`

**Output:**

* Function that executes once

**Starter Code:**

```javascript
function once(fn) {
    // TODO
}
```

**Example Test Cases:**

```
const logOnce = once(() => console.log("Hello"));
logOnce(); // Prints "Hello"
logOnce(); // Does nothing
```

---

### **Day 79 – Compose Functions**

**Problem Statement:**
Implement a function `compose(fns)` that takes multiple functions and composes them from right to left.

**Input:**

* Array of functions

**Output:**

* A composed function

**Starter Code:**

```javascript
function compose(...fns) {
    // TODO
}
```

**Example Test Cases:**

```
const add1 = x => x+1;
const double = x => x*2;
const composed = compose(double, add1);
composed(3) -> 8  (double(add1(3)))
```

---

### **Day 80 – Pipe Functions**

**Problem Statement:**
Implement a function `pipe(fns)` that takes multiple functions and pipes them from left to right.

**Input:**

* Array of functions

**Output:**

* A piped function

**Starter Code:**

```javascript
function pipe(...fns) {
    // TODO
}
```

**Example Test Cases:**

```
const add1 = x => x+1;
const double = x => x*2;
const piped = pipe(add1, double);
piped(3) -> 8  (double(add1(3)))
```

---

🔥 Nice — let’s wrap it up with the **final stretch: Days 81–100**.
This last part mixes **advanced problems + mini-projects + capstone builds** so by Day 100 you’ll have touched on all core **DSA, deep JavaScript, async, and practical applications**.

---

# 📘 **100 Days of JavaScript Challenge**

## 🟥 Part 5 – Advanced & Projects (Days 81–100)

---

### **Day 81 – LRU Cache**

**Problem Statement:**
Design and implement an **LRU (Least Recently Used) Cache** with the following methods:

* `get(key)` → returns value or -1
* `put(key, value)` → insert/update key, evict least recently used if full

**Input/Output:**

* Initialize with capacity
* Operations update cache accordingly

**Starter Code:**

```javascript
class LRUCache {
    constructor(capacity) {
        // TODO
    }
    get(key) {}
    put(key, value) {}
}
```

**Example Test Cases:**

```
Input: LRUCache cache = new LRUCache(2);
cache.put(1,1); cache.put(2,2); cache.get(1) -> 1
cache.put(3,3); cache.get(2) -> -1
```

---

### **Day 82 – Implement Min Stack**

**Problem Statement:**
Design a stack supporting:

* `push(x)`
* `pop()`
* `top()`
* `getMin()` → returns minimum element in O(1).

**Starter Code:**

```javascript
class MinStack {
    constructor() {}
    push(x) {}
    pop() {}
    top() {}
    getMin() {}
}
```

**Example Test Case:**

```
Input: push(-2), push(0), push(-3), getMin() -> -3
```

---

### **Day 83 – Implement Trie (Prefix Tree)**

**Problem Statement:**
Implement a Trie with methods:

* `insert(word)`
* `search(word)`
* `startsWith(prefix)`

**Starter Code:**

```javascript
class Trie {
    constructor() {}
    insert(word) {}
    search(word) {}
    startsWith(prefix) {}
}
```

**Example Test Case:**

```
Input: insert("apple"), search("apple") -> true, search("app") -> false
```

---

### **Day 84 – Word Ladder Problem**

**Problem Statement:**
Given two words `beginWord` and `endWord`, and a dictionary of words, return the length of the shortest transformation sequence (one letter at a time, must be in dictionary).

**Starter Code:**

```javascript
function ladderLength(beginWord, endWord, wordList) {
    // TODO
}
```

**Example Test Case:**

```
Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]
Output: 5
```

---

### **Day 85 – Clone Graph**

**Problem Statement:**
Given a reference to a node in a connected undirected graph, return a **deep copy** of the graph.

**Starter Code:**

```javascript
function cloneGraph(node) {
    // TODO
}
```

**Example Test Case:**

```
Input: [[2,4],[1,3],[2,4],[1,3]]
Output: deep cloned graph
```

---

### **Day 86 – Serialize & Deserialize Binary Tree**

**Problem Statement:**
Design functions `serialize(root)` and `deserialize(data)` for a binary tree.

**Starter Code:**

```javascript
function serialize(root) {
    // TODO
}

function deserialize(data) {
    // TODO
}
```

**Example Test Case:**

```
Input: [1,2,3,null,null,4,5]
Output: Same tree reconstructed
```

---

### **Day 87 – Sudoku Solver**

**Problem Statement:**
Solve a **9x9 Sudoku puzzle** by filling empty cells.

**Starter Code:**

```javascript
function solveSudoku(board) {
    // TODO
}
```

**Example Test Case:**

```
Input: Board with empty cells as "."
Output: Completed valid sudoku
```

---

### **Day 88 – N-Queens Problem**

**Problem Statement:**
Return all distinct solutions to placing N queens on an NxN board.

**Starter Code:**

```javascript
function solveNQueens(n) {
    // TODO
}
```

**Example Test Case:**

```
Input: 4
Output: [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]
```

---

### **Day 89 – Regular Expression Matching**

**Problem Statement:**
Implement regex matching with support for `.` and `*`.

**Starter Code:**

```javascript
function isMatch(s, p) {
    // TODO
}
```

**Example Test Case:**

```
Input: s="aab", p="c*a*b"
Output: true
```

---

### **Day 90 – Median of Two Sorted Arrays**

**Problem Statement:**
Given two sorted arrays `nums1` and `nums2`, return the median of the two arrays.

**Starter Code:**

```javascript
function findMedianSortedArrays(nums1, nums2) {
    // TODO
}
```

**Example Test Case:**

```
Input: [1,3], [2]
Output: 2.0
```

---

### **Day 91 – Implement Priority Queue (Heap)**

**Problem Statement:**
Build a **min-heap priority queue** with methods:

* `insert(val)`
* `extractMin()`

**Starter Code:**

```javascript
class MinHeap {
    constructor() { this.heap = []; }
    insert(val) {}
    extractMin() {}
}
```

**Example Test Case:**

```
Insert [3,2,1], extractMin -> 1
```

---

### **Day 92 – Implement Scheduler**

**Problem Statement:**
Implement a `Scheduler` that runs a max of `n` tasks concurrently, queuing extra tasks until a slot is free.

**Starter Code:**

```javascript
class Scheduler {
    constructor(limit) {}
    add(promiseFn) {}
}
```

**Example Test Case:**

```
Run 5 async tasks with concurrency=2 → executes 2 at a time
```

---

### **Day 93 – Rate Limiter**

**Problem Statement:**
Implement a **rate limiter** function that allows at most `k` calls every `t` ms.

**Starter Code:**

```javascript
function rateLimiter(fn, limit, interval) {
    // TODO
}
```

**Example Test Case:**

```
Allow max 2 calls per second → extra calls ignored/delayed
```

---

### **Day 94 – JSON Stringify Polyfill**

**Problem Statement:**
Implement your own version of `JSON.stringify`.

**Starter Code:**

```javascript
function myStringify(obj) {
    // TODO
}
```

**Example Test Case:**

```
Input: {a:1, b:"text"}
Output: '{"a":1,"b":"text"}'
```

---

### **Day 95 – JSON Parse Polyfill**

**Problem Statement:**
Implement your own version of `JSON.parse`.

**Starter Code:**

```javascript
function myParse(str) {
    // TODO
}
```

**Example Test Case:**

```
Input: '{"a":1,"b":"text"}'
Output: {a:1, b:"text"}
```

---

### **Day 96 – Virtual DOM Implementation**

**Problem Statement:**
Implement a simple **Virtual DOM** with `createElement`, `render`, and `diff`.

**Starter Code:**

```javascript
function createElement(type, props, ...children) {
    // TODO
}
```

**Example Test Case:**

```
Input: createElement("div", null, "Hello")
Output: Virtual DOM object
```

---

### **Day 97 – Build Todo App (LocalStorage)**

**Problem Statement:**
Build a simple **todo app** with:

* Add task
* Delete task
* Mark complete
* Persist in `localStorage`

**Starter Code:** *(basic HTML provided)*

```html
<!DOCTYPE html>
<html>
  <body>
    <input id="taskInput"/>
    <button id="addBtn">Add</button>
    <ul id="todoList"></ul>
    <script src="todo.js"></script>
  </body>
</html>
```

```javascript
// todo.js
// TODO: Implement todo app
```

---

### **Day 98 – Build Weather App (API)**

**Problem Statement:**
Build a simple weather app that fetches weather data from an API (like OpenWeatherMap).

**Features:**

* Input city
* Fetch weather via `fetch`
* Display temperature & condition

---

### **Day 99 – Build Chat App (WebSockets)**

**Problem Statement:**
Build a simple chat app using WebSockets.

**Features:**

* Real-time message exchange
* Multi-user support

**Starter Code (Node.js server skeleton):**

```javascript
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", ws => {
    ws.on("message", msg => {
        // TODO: Broadcast message
    });
});
```

---

### **Day 100 – Capstone: Build Your Own Mini Framework**

**Problem Statement:**
Build a minimal front-end framework inspired by React/Vue.

**Features:**

* `createComponent` function
* Simple reactivity system
* Rendering logic

**Goal:**
Tie together all skills: closures, classes, async, DOM, and algorithms.

---

✅ That’s **Days 81–100 complete** → full **100 Days of JavaScript Challenge**!
This final section gave you:

* Advanced DSA (LRU, Trie, Graph, Tree)
* System problems (Scheduler, Rate Limiter)
* Polyfills & internals
* Mini-projects & capstone framework

---



