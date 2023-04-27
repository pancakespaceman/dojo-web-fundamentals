/* 
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = 'a';
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ['a'];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(arr, newItem) {
  // shift every item to the right by 1 starting from the back
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = newItem;
  return arr.length;
}
/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr2 = ['a', 'b', 'c', 'd'];
const expected2 = 'a';
// after running function arr2 should now be:
const expectedArr2 = ['b', 'c', 'd'];

const arr3 = [];
const expected3 = undefined;
const expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items = []) {
  const firstItem = items[0];

  if (items.length > 0) {
    for (let i = 1; i < items.length; i++) {
      items[i - 1] = items[i];
    }

    items.length = items.length - 1; // cut off 'empty' value at the end
  }

  return firstItem;
}
