/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const removeIdx1 = 1;
const expectedA1 = 'b';
// after function call, arr1 should be:
const arr1Expected = ['a', 'c', 'd', 'e'];

const arr2 = ['a', 'b', 'c'];
const removeIdx2 = 3;
const expectedA2 = null;
const arr2Expected = ['a', 'b', 'c'];

const arr3 = ['a', 'b', 'c'];
const removeIdx3 = -3;
const expectedA3 = null;
const arr3Expected = ['a', 'b', 'c'];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(arr = [], idx) {
  if (idx < 0 || idx >= arr.length) {
    return null;
  }

  let removed = arr[idx];

  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // when the loop is done the 2nd to last item is set to the last item
  // so there is a duplicate that needs to be removed
  arr.pop();
  return removed;
}
/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.
≤
  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expectedB1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expectedB2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expectedB3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums = []) {
  if (nums.length === 0) {
    return nums;
  }

  let idxOfMin = 0;
  let min = nums[idxOfMin];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      idxOfMin = i;
    }
  }

  // starting from where the min is, shift to the right to overwrite the min
  // which will leave an empty space at the beginning
  //  i>= 1 so i - 1 doesn't go below 0
  for (let i = idxOfMin; i >= 1; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = min;
  return nums;
}
