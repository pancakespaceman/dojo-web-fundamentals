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
  "Very doubtful."
];

/**
* Given an array of wise answers, randomly choose a response and return it
* @param {Array<any>} arr
* @returns {string} the randomly chosen oracle response 
*/
function consultTheOracle(arr) {
  // 0 * 20  = 0
  // 0.9999 * 20 = 19.99998
  // round down, which takes 19.99998 -> 19
  return arr[Math.floor(Math.random() * arr.length)]
}

console.log(consultTheOracle(lifesAnswers))


/*****************************************************************/

var nums1 = [2, -1, -3, 5, 9, 7, -5, 10, -9, 1]
var expected1 = [2, 0, 0, 5, 9, 7, 0, 10, 0, 1]

/**
 * Loop through the array and change any negative values to zero. 
 * @param {Arrray[number]} nums array of numbers to zero out negatives from
 * @returns {Array[number]} returns the same array with negatives zeroed out
 */
function zeroOutNegativeValues(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  return nums
}

console.log(zeroOutNegativeValues(nums1))