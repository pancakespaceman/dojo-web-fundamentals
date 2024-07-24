/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(n - 1) -> O(n) - linear
 * - Space: O(1).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
  if (idx < 0 || idx >= items.length) {
    return null;
  }

  var removed = arr[idx];

  for (var i = idx; i < items.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  items.length--;

  return removed;
}

/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];

/**
 * JS DOC
 * Moves the smallest number in the given array to the front.
 * - Time: O(2n) -> O(n) -- We can potentially loop through the whole array twice
 * - Space: O(1) - constant because this algo doesn't take up any extra memory
 *  as the size of the input grows. No new object or array is created and grows with the size of the input
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  if (nums.length < 1) {
    return nums;
  }
  var min = nums[0];
  var idxOfMin = 0;

  // Find the min value
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      idxOfMin = i;
    }
  }

  // shift the min value to the front
  // starting from where the min is, shift to the right to overwrite the min value
  // which will leave an empty space at the beginning
  // i >= 1 so that our i - 1 doesn't go below 0
  for (var i = idxOfMin; i >= 1; i--) {
    nums[i] = nums[i - 1];
  }
  console.log("Nums after the shifting:", nums);

  nums[0] = min;
  return nums;
}

console.log(minToFront(nums1));
