// Pseudocode
// Explaining the algo step by step in English

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.

Return k.
*/

const myArr = [0, 1, 2, 2, 3, 0, 4, 2];
const myVal = 2;

const anotherArr = [1, 2, 3];
const anotherVal = 3;

// O(n)
function removeElement(nums, val) {
  // SETUP

  // WORK
  // first look through the array looking for val
  for (let i = 0; i < nums.length; i++) {
    // if we encounter val, we need to remove it
    if (val === nums[i]) {
      // how can i remove from the array?
      // we can take the last thing in the array and assign it to
      // the index with the value we want to remove
      nums[i] = nums[nums.length - 1];
      // after which we can pop to remove that item
      nums.length--;

      // what if, after we remove an item and the current index also happens to be the search Val
      // if the i++ happens, the loop would continue on and miss that val
      // check to see if the current index is still the search val
      if (nums[i] === val) {
        i--;
      }
    }
  }

  // RETURN
  return nums.length;
}

console.log("The length of the array is:", removeElement(myArr, myVal));
console.log("The array now looks like:", myArr);

// do we care about the order of items in the array?
