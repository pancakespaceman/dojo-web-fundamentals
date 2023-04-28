/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const numbersA1 = [20, 10, 30];
const numbersB1 = [10, 30, 20];
const expectedA1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1 = [], nums2 = []) {
  const summedCols = [];

  for (let i = 0; i < nums1.length; i++) {
    summedCols.push(nums1[i] + nums2[i]);
  }
  return summedCols;
}

/*****************************************************************************/

/* 
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

Given an array, rotate the array in place to the right by "k" steps, where "k" is
non-negative.

The given array must be mutated, do not return a new array.
*/

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const expected1 = [5, 6, 7, 1, 2, 3, 4];
/* Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const expected2 = [3, 99, -1, -100];
/* Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

const nums3 = [1, 2, 3, 4];
const k3 = 4;
const expected3 = [1, 2, 3, 4];
/* Explanation: 
After 4 rotations it is back to it's starting point.
*/

const nums4 = [1, 2];
const k4 = 5;
const expected4 = [2, 1];
/* 
Explanation: After 2 rotations the array is back to it's original order.
After 4 rotations it is back to it's original order again.
1 more rotation makes 5.
*/

/**
 * Rotates the array items to the right "k" times.
 * @param {Array<number>} nums The numbers to be rotated.
 * @param {number} k The amount of times to rotate the last item to the front.
 * @returns {Array<number>} The given array after being rotated.
 */
function rotate(nums, k) {
  k = k % nums.length;
  if (k === 0) {
    return nums;
  }
  var temp;
  for (var i = k; i > 0; i--) {
    for (var j = nums.length - 1; j > 0; j--) {
      temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
    }
  }
  return nums;
}

function rotate(nums, k) {
  const rotateAmnt = k % nums.length;
  const numsToRotate = nums.splice(nums.length - rotateAmnt, rotateAmnt);
  nums.splice(0, 0, ...numsToRotate);
  return nums;
}

function rotate2(nums, k) {
  const rotateAmnt = k % nums.length;
  const temp = nums.slice(nums.length - rotateAmnt);

  for (let i = 0; i < nums.length; i++) {
    if (temp.length < nums.length) {
      // this num is being overwritten and needs to be saved.
      temp.push(nums[i]);
    }
    nums[i] = temp[i];
  }
  return nums;
}

function rotateByReversing(nums, k) {
  const rotateAmnt = k % nums.length;
  if (rotateAmnt > 0) {
    reverse(nums, 0, nums.length);
    reverse(nums, 0, rotateAmnt);
    reverse(nums, rotateAmnt);
  }
  return nums;
}

function reverse(arr, start = 0, end = arr.length) {
  while (start < end) {
    [arr[start], arr[end - 1]] = [arr[end - 1], arr[start]];
    start++;
    end--;
  }
  return arr;
}
