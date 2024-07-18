/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
var twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDimArr2 = [[1], [2], [3]];
var expected2 = [1, 2, 3];

var twoDimArr3 = [[], [], [10, 20]];
var expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  // SETUP
  // variable to have an empty array to hold all the elements
  const flattened = [];

  // WORK
  // Loop through the outer array to access each of the inner arrays
  // Nested loop to access each of the inner array elements
  // now that i have each individual element, push it into the new array
  for (let i = 0; i < twoDimArr.length; i++) {
    for (let j = 0; j < twoDimArr[i].length; ++j) {
      flattened.push(twoDimArr[i][j]);
    }
  }

  // RETURN
  // return the newly flattened array
  return flattened;
}

/*****************************************************************************/

/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
var nums1 = [2, 3, 1, 4];
var expected1 = 3;

// largest is first
var nums2 = [4, 1, 3, 2];
var expected2 = 3;

// largest duplicated first
var nums3 = [4, 4, 4, 1, 3, 2];
var expected3 = 3;

// 2nd largest is first
var nums4 = [3, 1, 4, 2];
var expected4 = 3;

// largest is 2nd
var nums5 = [3, 4, 2, 1];
var expected5 = 3;

var nums6 = [3, 3];
var expected6 = null;

var nums7 = [2];
var expected7 = null;

var nums8 = [];
var expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // SETUP
  // edge case if statement to exit the function early if the array length is too short
  if (nums.length < 2) {
    return null;
  }
  // variable to hold our largest value, default value of arr[0]
  // variable to hold the second largest value, default value of arr[1]
  var largest = nums[0];
  var secondLargest = nums[1];

  // WORK
  // First Loop through the array to find the largest value
  // inside the loop, we use an if statement to compare the current index value to our largest variable
  // if the index value is larger, then we reassign the largest variable
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  // Now we have found the largest value in the array

  // Loop through the array again to find the second largest
  // if statement, check if nums[i] is less that the largest AND if nums[i] is larger than second largest
  // if true, reassign second largest
  // what if secondLargest is already set as the largest value
  for (var i = 0; i < nums.length; i++) {
    if (secondLargest === largest && nums[i] < largest) {
      secondLargest = nums[i];
    }

    if (nums[i] < largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  // Check to see if largest is equal to secondLargest
  // certain situations could mean that these two variables end up the same value
  if (largest === secondLargest) {
    return null;
  }

  // RETURN
  // return the second largest value
  return secondLargest;
}

// console.log(secondLargest(nums1));
// console.log(secondLargest(nums2));
console.log(secondLargest(nums3));
// console.log(secondLargest(nums4));
console.log(secondLargest(nums5));
console.log(secondLargest(nums6));
// console.log(secondLargest(nums7));
// console.log(secondLargest(nums8));
