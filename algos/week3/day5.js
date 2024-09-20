/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  if (nums.length === 0){
    return nums;
  }

  let minVal = nums[0]
  let minIdx = 0

  for (let i = 1; i < nums.length; i++){
    if (nums[i] < minVal) {
      minVal = nums[i]
      minIdx = i
    }
  }

  // starting from where the min is, shift to the right to overwrite the min
  // which will leave an empty space at the beginning
  //  i>= 1 so i - 1 doesn't go below 0
  for (let i = minIdx; i >= 1; i--) {
    nums[i] = nums[i - 1]
  }

  nums[0] = minVal
  
  return nums
}

console.log(minToFront([6, 4, 5, 1, 3, 2]))