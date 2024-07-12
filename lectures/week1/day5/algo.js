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
  // PSEUDOCODE
  // SETUP
  // gathering ingredients together

  // create a new array to hold the data from the inputs
  var newArr = [];

  // WORK
  // instructions on how to cook the food
  // put the data from the arrays inside of the new array

  // if i only had one array, how would I put that data inside of the new array?
  // how can I access each piece of data inside the input array?

  // i need to loop through the array so I can access each piece of data
  // we need to push() the data from the input array into the new array
  for (var i = 0; i < items1.length; i++) {
    newArr.push(items1[i]);
  }

  // now how can I do this for the second array?

  // i need to loop through the second array to access each piece of data
  // we need to push() the data into the new array
  for (var i = 0; i < items2.length; i++) {
    newArr.push(items2[i]);
  }

  // RETURN
  // algo needs to give back data
  // eat the food

  // return the new array
  return newArr;
}

// Tests
// var result1 = concat(arrA1, arrB1);
// console.log(result1, "should be", expected1);

// var resul;
// t2 = concat(arrA2, arrB2);
// console.log(result2, "should be", expected2);

/*
  There is a collection of input strings and a collection of query strings. 
  For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
*/

var stringList1 = ["ab", "ab", "abc"];
var queries1 = ["ab", "abc", "bc"];
var expected = [2, 1, 0];

/**
 * Return an array of integers representing the frequency of occurrence of each query string in string list
 * @param {string[]} array of strings
 * @param {string[]} string to search for
 * @return {number[]} number of instances of each query string
 */
function matchingStrings(stringList, queries) {
  // setup
  // i need an array to hold the results of counting the instances of the queries
  // since the queries are an array, the results array will match it index for index
  // index 0 query count would go to index 0 of results array
  var results = [];

  // work
  // i need, for each query, look at all the strings in stringlist
  // i need to first loop through the queries so I can check each query
  // loop
  // now that i have a single query, how would I compare it to everything in stringList?
  // can't use a if statement because query is a single string, and stringList is an array
  for (var i = 0; i < queries.length; i++) {
    // setup: variable to keep track of the count of times the query shows up
    var count = 0;

    // queries[i] is the current query
    // loop through stringList so I can compare the query to everything in stringList
    for (var j = 0; j < stringList.length; j++) {
      // stringList[j] is the current string
      // compare the query to the current string in stringList
      // if they match, increment count
      if (queries[i] === stringList[j]) {
        count++;
      }
    }

    // push the count into the results array
    results.push(count);
  }
  // return
  // return the results
  return results;
}

var result1 = matchingStrings(stringList1, queries1);
console.log(result1, "should be", expected);

// == vs ===

// have different data types
// number == string
// true, false
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// == is a loose compare
// compare the values of the data, ingoring the data types

// === is a strict compare
// compare values and data types

// console.log("ab" == "abc");
// console.log("ab" === "abc");
