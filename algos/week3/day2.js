/* 
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

var arrA1 = ["a", "b"];
var arrB1 = [1, 2, 3];
var expected1 = ["a", "b", 1, 2, 3];

var arrA2 = [1, 2, 3];
var arrB2 = ["a", "b"];
var expected2 = [1, 2, 3, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
  var arrC = []

  for (var i = 0; i < items1.length; i++) {
    arrC.push(items1[i])
  }

  for (var i = 0; i < items2.length; i++) {
    arrC.push(items2[i])
  }

  return arrC
}

// Tests
var result1 = concat(arrA1, arrB1);
console.log(result1, "should be", expected1);

var result2 = concat(arrA2, arrB2);
console.log(result2, "should be", expected2);