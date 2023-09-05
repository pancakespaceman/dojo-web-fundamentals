/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

var numbersA1 = [20, 10, 30];
var numbersB1 = [10, 30, 20];
var expected1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  // code here
}

/*****************************************************************************/

/**
 * Given an array, return a new array which contains the items from a starting index
 * up to, but not including, an ending index
 */

var arr1 = ["a", "b", "c", "d", "e"];
var startIdx1 = 2;
var stopIdx1 = 4;
var expected1 = ["c", "d"];

var arr2 = ["a", "b", "c", "d", "e"];
var startIdx2 = 0;
var stopIdx2 = 3;
var expected2 = ["a", "b", "c"];

var arr2 = ["e", "f", "g"];
var startIdx2 = 0;
var stopIdx2 = 5;
var expected2 = ["e", "f", "g"];

var arr2 = ["e", "f", "g"];
var startIdx2 = -2;
var stopIdx2 = 2;
var expected2 = ["e", "f"];

var arr2 = ["e", "f", "g"];
var startIdx2 = 1;
var stopIdx2 = 1;
var expected2 = [];

var arr2 = [];
var startIdx2 = 0;
var stopIdx2 = 1;
var expected2 = [];

/**
 * Returns a new array which consists of the elements from the start index and up to but not including
 * the stop index (exclusive)
 * @param {Array<number>} items
 * @param {number} startIdx
 * @param {number} stopIdx
 * @returns {Array<number>} the sliced portion of the array
 */
function slice(items, startIdx, stopIdx) {}
