// Reversing a string
// Remember that strings are immutable, they cannot be modified

// use var to declare a variable (var has some weird behavior)
// In modern use of JS we declare variables using:
// let - works like variables in other languages (scope)
// const - constant meaning it cannot be changed

// const str1 = "creature"
// const expected1 = "erutaerc"

// const str2 = "dog"
// const expected2 = "god"

// const str3 = ""
// const expected3 = ""

// const str4 = "banana"
// const expected4 = "ananab"

// Algos should be a function
// we need to reuse the code to test multiple test cases

// Pseudocoding
// We write the steps we want to do in ENGLISH

function reverseString(hotDog) {
  // SETUP
  // Need to make a new empty string to hold the reversed version
  var reversedString = "";

  // WORK
  // I need to loop through the string
  // The loop variable starts at the end of the string
  // The loop should run until the beginning of the string, including the first character
  // The loop variable should decrement by 1 each time
  for (var i = hotDog.length - 1; i >= 0; i--) {
    // Take the current character in the string, and add it to the end of the reversed string
    reversedString += hotDog[i]; // this is making a new string and overwriting the reversedString value
    // reversedString = reversedString + hotDog[i]
    // leftSide = rightSide
    // we cannot assign a expression to a variable, so the expression must be evaluated first
  }

  // RETURN
  // return the reversed version
  return reversedString;
}

// console.log(reverseString(str1))
// console.log(reverseString(str2))
// console.log(reverseString(str3))
// console.log(reverseString(str4))

/**********************************************/

/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud"; // "duD"
const expected3 = false;

const str4 = "oho!"; // "!oho"
const expected4 = false;

function isPalindrome(str) {
  // SETUP
  // I don't need any setup

  // WORK
  // We need to loop through the string to compare the characters from the beginning and end towards the center
  // The Loop variable should start at the beginning of the string
  // The Loop should stop halfway through the string
  // The loop variable should increment
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    // lets take the current characters and put them in variables for readability
    var leftChar = str[i];
    var rightChar = str[str.length - 1 - i];

    // Compare the character at the current index to its compliment index on the other end of the string
    // if the characters match, just continue through the loop
    // if the characters don't match, end the function and return false
    if (leftChar !== rightChar) {
      return false; // return exits the function
    }
  }

  // RETURN
  // if we reach this line, then the string is a palindrome so return true
  return true;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
