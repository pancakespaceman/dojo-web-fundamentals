// Arrays 

// Composite Data Types, aka collections, aka data structures
// Can contain any number of any data type
// Can mix and match data types (In JS)

var myArr = [42, "thanks for all the fish", true, "dolphins are cool", "dolphins are smarter than humans", "don't panic", [3, 7 ,2]]
console.log(myArr[0])
console.log(myArr[5])
// console.log(myArr.length)
console.log(myArr[myArr.length - 1][1])

// var thing = myArr[myArr.length - 1]
// console.log(thing[1])

// Add and Remove from an array
// push() --> add to the END of the array
// pop() --> remove and return the last element in the array¨

console.log("---------------------------------------")
var thing1 = myArr.pop()

console.log(myArr)
console.log(thing1)

// How do I change the value of a given index in the array?
myArr[2] = "whatever I want"
console.log(myArr)

function reverseArr(arr) {
  var temp;
  for(var i = 0; i < arr.length / 2; i++) {
    temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }

  return arr;
}

console.log(reverseArr(["a", "b", "c", "d", "e"]))