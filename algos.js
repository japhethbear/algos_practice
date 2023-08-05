// Algorithms in JavaScript

// Algorithm Prompt 1: Sum of Two Numbers

// Problem: Write a function called sumOfTwo that takes two numbers as input and returns their sum.

// Input: Two numbers, num1 and num2.

// Output: The sum of num1 and num2.

// Example: console.log(sumOfTwo(5, 7)); // Output: 12
// console.log(sumOfTwo(-3, 10)); // Output: 7
// console.log(sumOfTwo(0, 0)); // Output: 0

// / My solution:

function sumOfTwo(num1, num2) {
    return num1 + num2;
}

// Algorithm Prompt 2: Find the Maximum Number

// Problem: Write a function called findMax that takes an array of numbers as input and returns the largest number in the array.

// Input: An array of numbers, arr.

// Output: The largest number in the array.

// Example: console.log(findMax([5, 2, 9, 1, 5, 6])); // Output: 9
// console.log(findMax([-3, 0, -10, -1])); // Output: 0
// console.log(findMax([8])); // Output: 8

// My solution:

// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([5, 2, 9, 1, 5, 6])); // Output: 9
// console.log(findMax([-3, 0, -10, -1])); // Output: 0
// console.log(findMax([8])); // Output: 8

// Algorithm Prompt 3: Reverse a String

// Problem: Write a function called reverseString that takes a string as input and returns a new string with its characters reversed.

// Input: A string, str.

// Output: The reversed string.

// Example:

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("")); // Output: ""

// My solution:

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("")); // Output: ""

// Algorithm Prompt 4: Check for Palindrome

// Problem: Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization.

// Input: A string, str.

// Output: true if the input string is a palindrome, false otherwise.

// Example:

// My solution:

function isPalindrome(str) {
    const processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed_string = processedStr.split("").reverse().join("");
    console.log(reversed_string)
    if (processedStr === reversed_string) {
        return true;
    }
    else return false;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

