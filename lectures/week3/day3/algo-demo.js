// Creating Variables in Javascript
// let vs const vs var


// variable scope
// scope: what code can access a thing?
// easiest way to identify a scope is:
  // 1. global scope (entire file)
  // 2. Look for code blocks {}
// things definied inside of one function, are in a different scope than those in another function
// we can't access those things outside of the scope they are defined

// var x = "hello there" // global scope

// function foo() {
//   console.log(x)
// }

// function bar() {
//   console.log(x)
// }

// foo()
// bar()

// reasons to use global scope
  // 1. constant values (pi )
  // 2. state (data structure (like an object) where the values inside can change, but the structure itself stays the same)


// var
// var allows us to make a variable
// var is confusing when it comes to scope
// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }

// function foobar() {
//   console.log("i inside of foobar",i)
// }
// console.log("Outside the loop the value of i is:", i)
// foobar()

// let
// let is functionally the same as var
// except it restricts the variable to the scope its defined
// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// function foobar() {
//   console.log("i inside of foobar",i)
// }
// console.log("Outside the loop the value of i is:", i)
// foobar()


// const
// constant
// the variable cannot be reassigned
// the data inside the variable, depending on the data, can still be modified
// const x = 5
const x = 5


// const arr = ["vicky", "leia"]
// arr.push("shiro")
// console.log(arr)

// const user = {
//   username: "shawn",
//   email: "sc@dojo.com"
// }

// user.password = "password"

// console.log(user)

// const arr = ["vicky", "leia"]
// arr.push("shiro")
// console.log(arr)

// const user = {
//   username: "shawn",
//   email: "sc@dojo.com"
// }

// user.password = "password"

// console.log(user)


// shorthand for looping through an array

// for (const value of arr) {
//   console.log(value)

//   value = "something"
// }


// TAKE AWAYS

// we should now only use let and const to make variables, not var
// Controversy: use const always, until you need let

// ===================================================================

/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // Pseudocode
  // write out the steps for an algo without actually writing code
  // writing out all instructions in english

  // SETUP - setup refers to making an variables or validation inputs
  // do a check to make sure the nums array has two or more elements
  // variable to track the largest value,
  // variable to track the second largest value
  
  // WORK - basically where the loops are, the decision making, invoking other functions to do things

  // 1. loop through the nums array and find the largest value
  // for loop through nums
    // check if the current nums element is larger than the largest variable
    // if true, reassign largest variable to the larger element

  // 2. loop through the nums array and find the second largest value

  // for loop through nums
    // check if the current element is smaller than largest AND if the current element is larger than second largest variable
    // if true, reassign the second largest variable to the current element

    // what if secondLargest somehow is assigned the largest value at the beginning
    // we need to check if the secondLargest is the same as largest AND if the current element is smaller
    // if the current element is smaller, then we can reassign secondlargest to something that isn't the largset

  // what happens if the array only has a single value? there can be no second largest, but the array can be any length
  // that would mean that largest is the same value as secondLargest
  // [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  // we can check if they are the same and return null if true

  // RETURN - remembering to return from the function
  // return the second largest value


  // SETUP
  if (nums.length < 2) {
    return null;
  }

  let largest = nums[0];
  let secondLargest = nums[1];


  // WORK
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (secondLargest === largest && nums[i] < largest) {
      secondLargest = nums[i];
    }

    if (nums[i] < largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  // RETURN
  // all dupes
  if (largest === secondLargest) {
    return null;
  }
  return secondLargest;
}


console.log(`Test 1 expected: ${expected1}, result: ${secondLargest(nums1)}`)
console.log(`Test 2 expected: ${expected2}, result: ${secondLargest(nums2)}`)
console.log(`Test 3 expected: ${expected3}, result: ${secondLargest(nums3)}`)
console.log(`Test 4 expected: ${expected4}, result: ${secondLargest(nums4)}`)
console.log(`Test 5 expected: ${expected5}, result: ${secondLargest(nums5)}`)
console.log(`Test 6 expected: ${expected6}, result: ${secondLargest(nums6)}`)
console.log(`Test 7 expected: ${expected7}, result: ${secondLargest(nums7)}`)
console.log(`Test 8 expected: ${expected8}, result: ${secondLargest(nums8)}`)
