/*
  Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
  The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

  Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

  Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
  The remaining elements of nums are not important as well as the size of nums.
  Return k.
*/

function removeElement(nums, val) {
  // SETUP
  // var to hold the count of times val has been found
  let count = 0;

  // WORK
  // loop through the nums array
  // use an if statement to check to see if the current value in the array is equal to val
  // if found, swap the element with the last thing in the array
  // how can i prevent an infinite loop where the val keeps swapping aronud with itself?
  // if i counted the number of times i found val, i can stop the loop count times from the end of the array
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === val) {
      let temp = nums[nums.length - 1 - count];
      nums[nums.length - 1 - count] = nums[i];
      nums[i] = temp;
      count++;

      if (nums[i] === val) {
        i--;
      }
    }
  }

  // remove the last count things from the array
  nums.length = nums.length - count;

  // RETURN
  // return the length of the array
  return nums.length;
}

const myArr = [0, 1, 2, 2, 3, 0, 4, 2];

console.log('The length of the array is:', removeElement(myArr, 2));
console.log('The array now looks like:', myArr);

// Pseudocode
// explaining the algo step by step in English (not code)
// algos are a logic problem,
