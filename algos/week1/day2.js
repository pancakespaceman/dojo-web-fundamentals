var wordArray = [
  "shawn",
  "jim",
  "tyler",
  "heidi",
  "john",
  "alfredo",
  "michael",
];

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }

  return sum / arr.length;
}

console.log(avgWordLength(wordArray));

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(arr) {
  // SETUP
  // define any extra variables or data that we need in order to do the work of the problem
  var longestWord = "";

  // WORK
  // where we do the work of the algo
  // generally this means a for loop
  for (var i = 0; i < arr.length; i++) {
    if (longestWord.length <= arr[i].length) {
      longestWord = arr[i];
    }
  }

  // RETURN
  return longestWord;
}

console.log(findLongestWord(wordArray));

/************************************************************************************************/

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, stop) {
  // SETUP
  var sum = 0;

  // WORK
  for (var i = start; i <= stop; i++) {
    sum += i;
  }

  // RETURN
  return sum;
}

console.log(inclusiveRangeSum(rangeA1, rangeB1));
