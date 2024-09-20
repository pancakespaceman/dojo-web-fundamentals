/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(n). 10 elements, 10 operations. 100 elements, 100 operations
 * - Space: O(1). we dont increase the amount of space taken based on input
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
  console.log("value of idx:", idx)
  if (idx < 0 || idx >= items.length) {
    return null;
  }

  const removedValue = items[idx]

  for (let i = idx; i < items.length - 1; i++) {
    items[i] = items[i + 1]
  }

  // items.pop()
  items.length--

  return removedValue
}

console.log(arr1)
console.log(removeAt(arr1, 1))
console.log(arr1)