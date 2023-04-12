var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(s1, s2) {
  if (s1.length <= s2.length) {
    return s1 + s2;
  } else {
    return s2 + s1;
  }
}

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str, repeatAmount) {
  let repeatedStr = '';

  for (let i = 0; i < repeatAmount; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

var wordArray = [
  'shawn',
  'jim',
  'tyler',
  'heidi',
  'john',
  'alfredo',
  'michael',
];

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(words) {
  let totalLen = 0;

  for (let i = 0; i < words.length; i++) {
    totalLen += words[i].length;
  }

  return totalLen / words.length;
}

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(words) {
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
