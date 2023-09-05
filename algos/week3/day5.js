/* 
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

Given an array, rotate the array in place to the right by "k" steps, where "k" is
non-negative.

built-it array methods (such as slice/splice) are okay.

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

  return nums
}

