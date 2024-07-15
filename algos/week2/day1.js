/* 
  Consult the Oracle

  Given an array of wise answers, randomly choose a response and return it
*/

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

/**
 * Given an array of wise answers, randomly choose a response and return it
 * @param {Array<any>} arr
 * @returns {string} the randomly chosen oracle response
 */
function consultTheOracle(arr) {
  // code here
  // get the random number
  var randNum = Math.floor(Math.random() * arr.length);

  return arr[randNum];
}

console.log(consultTheOracle(lifesAnswers));

/* 
  From zoom interview with student in year 2020

  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

var arr1 = ["a", "b", "c"];
var expected1 = ["a", "b", "c", "a", "b", "c"];

var arr2 = ["a"];
var expected2 = ["a", "a"];

var arr3 = [];
var expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
function concatArrWithSelf(items) {
  // SETUP
  var newArr = [];

  // WORK
  for (var i = 0; i < items.length; i++) {
    newArr.push(items[i]);
  }

  for (var i = 0; i < items.length; i++) {
    newArr.push(items[i]);
  }
  // RETURN
  return newArr;
}

console.log(concatArrWithSelf(arr1));
console.log(concatArrWithSelf(arr2));
console.log(concatArrWithSelf(arr3));
