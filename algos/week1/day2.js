var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael']

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(arr) {
  // SETUP
  // I need a variable to keep track of the sum of all the lengths
  var sum = 0;

  // WORK
  // loop through the array of strings
  // add the current string's length to the sum
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].length
  }

  // after the loop, calculate the average with the sum variable
  var avg = sum / arr.length

  // RETURN
  // return the average 
  return avg
}

console.log(avgWordLength(wordArray))

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(arr) {
  // SETUP
  // var to keep track of the longest word

  // WORK
  // loop through the array of strings

  // RETURN
  // longest length
}

console.log(findLongestWord(wordArray))

/************************************************************************************************/

var rangeA1 = 10
var rangeB1 = 15
var rangeExpected = 75 // 10 + 11 + 12 + 13 + 14 + 15
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, stop) {}

console.log(inclusiveRangeSum(rangeA1, rangeB1))