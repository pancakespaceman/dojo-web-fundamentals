/*
Write a function that returns the number of '2's in the factorization of a number.

For example,
twoCount(24)
should return 3, since the factorization of 24 is 2^3 x 3

twoCount(17280)
should return 7, since the factorization of 17280 is 2^7 x 5 x 3^3
The number passed to two_count (twoCount) will always be a positive integer greater than or equal to 1.
*/

function twoCount(n) {
  // SETUP
  var count = 0;
  // in general, we don't want to modify
  // the param value (in case we need it later on)
  var currVal = n;

  // WORK
  // For loops are fantastic when I know how many times I want to loop e.g. loop through an array
  // While loops are great when I don't know how many times I want to loop
  while (currVal % 2 === 0) {
    currVal /= 2; // currVal = currVal / 2
    count++;
  }

  // RETURN
  return count;
}

// console.log(twoCount(24));
// console.log(twoCount(17280));

// ===========================================================================================

/*
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: 
from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
*/

function catSteps(start, finish) {
  // SETUP
  var jumpCount = 0;
  var amountToJump = finish - start;

  // WORK
  while (amountToJump > 2) {
    amountToJump -= 3;
    jumpCount++;
  }

  jumpCount += amountToJump;

  // RETURN
  return jumpCount;
}

function catSteps2(start, finish) {
  // SETUP
  var amountToJump = finish - start;

  // WORK
  var jumpBy3 = Math.floor(amountToJump / 3);
  var jumpBy1 = amountToJump % 3;

  // RETURN
  return jumpBy3 + jumpBy1;
}

// console.log(catSteps(1, 5));
// console.log(catSteps(1, 7));
// console.log(catSteps(2, 10));

// ===========================================================================================

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/
function shiftFromSpecificIndex(items, startIndex) {
  const firstItem = items[startIndex];

  if (items.length > 0) {
    for (let i = startIndex + 1; i < items.length; i++) {
      items[i - 1] = items[i];
    }

    items.length = items.length - 1; // cut off 'empty' value at the end
  }

  return firstItem;
}

function removeElement(nums, val) {
  // SETUP

  // WORK
  for (var i = 0; i < nums.length; i++) {
    // while (nums[i] === val) {
    //   shiftFromSpecificIndex(nums, i);
    // }
    if (nums[i] === val) {
      shiftFromSpecificIndex(nums, i);
      i--
    }
  }

  // RETURN
  return nums.length;
}

function removeElement2(nums, val) { 
  // SETUP
  let count = 0;

  // WORK
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1 - count];

      count++;
      i--;
    }
  }

  nums.length = nums.length - count;

  // RETURN
  return nums.length;
};

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const expected = [0, 1, 3, 0, 4];

console.log(removeElement2(arr, 2));
console.log(arr);
