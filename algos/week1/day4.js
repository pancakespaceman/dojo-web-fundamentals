/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

let nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
let expected1 = 3;

let nums2 = [];
let expected2 = 0;

let nums3 = [-4, -2, -6];
let expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {}

/*****************************************************************/

/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
let string1 = 'hello';
expected1 = 'Hello';

let string2 = '';
expected2 = '';

/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string) {
  // SETUP
  // early exit - don't run the code if we dont need to
  if (string.length < 1) {
    return '';
  }

  // WORK

  // how do I capitalize a string in JS? -> string.toUpperCase()
  // how do i grab just the first character in a string in JS? -> string.charAt(0) -- string[0]
  // how do I grab the rest of the string js? -> string.slice(1) string.substr(1)

  // grab the first character, uppercase it, and concat (add) it to the rest of the original string
  var returnString = string.charAt(0).toUpperCase() + string.slice(1);

  // RETURN
  return returnString;
}

/* Tests for capitalization function */
let strings1 = ['hello', 'world'];
let expectedStrings1 = ['Hello', 'World'];

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {
  // PSEUDOCODE
  // writing out the steps in english
  // SETUP
  // make an extra varialbe to hold a new array/string or hold a counter

  // WORK
  // what do I need to use to go through an array? a loop!
  // assign the strings[i] with the capitalized version of that string
  for (let i = 0; i < strings.length; i++) {
    strings[i] = capitalize(strings[i]); // 'Shawn'
  }

  // RETURN
  return strings;
}

console.log(capitalization(['shawn', 'converse']));
console.log(capitalization(['peter', 'monaco']));
console.log(capitalization(['johnny', 'sacco']));
console.log(capitalization(strings1));

var word1 = 'shawn';
var word1 = 'giraffe';

console.log(word1);
