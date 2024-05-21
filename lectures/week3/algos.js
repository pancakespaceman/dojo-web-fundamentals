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
function removeElement(nums, val) {
  // SETUP - make any variables we need / or make any early exits

  // WORK - loops
  // loop through the array
  // use and if statement to check to see if the current value [i] is equal to the val
  // if found, swap that element with the last element in the array
  // pop from the array to remove the element
  // if the element after the pop is still the val, decrement i
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let temp = nums[nums.length - 1];
      nums[nums.length - 1] = nums[i];
      nums[i] = temp;

      nums.length--;
      if (nums[i] === val) {
        i--;
      }
    }
  }

  // RETURN
  // return the length of the array after removing all the instances of val
  return nums.length;
}

const myArr = [0, 1, 2, 2, 3, 0, 4, 2];

console.log("The length of the array is:", removeElement(myArr, 2));
console.log("The array now looks like:", myArr);

// let is basically the equivalent to var
// has a restriction on scope
// const the variable cannot be reassigned
// we can still mutate the value of the variable
