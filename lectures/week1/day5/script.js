console.log("Hello there from another file!");


function reverse(arr) {
  var arr2 = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr.pop());
  }

  return arr2;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(["dog", "cat", "whale", "bear", "frog", "elephant"]));
