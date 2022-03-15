// Variable
var anything = 123
var my_most_amazing_variabke_ever = "My Favorite String"
var gshjkdhfkljsdfkshdfkgjhsdklfjhsajdlkfhaksdhfakldshfjklasdhfklasdhfkjahsdkfhajkldshfaldsjklfdhjklfhajhfxkjcfksdbfakjsdbfakjsd = "Is this a variable?"

console.log("Another string")
console.log(2341234)
console.log(anything)
console.log(my_most_amazing_variabke_ever)
console.log(gshjkdhfkljsdfkshdfkgjhsdklfjhsajdlkfhaksdhfakldshfjklasdhfklasdhfkjahsdkfhajkldshfaldsjklfdhjklfhajhfxkjcfksdbfakjsdbfakjsd)

var firstName = "Shawn"

var kitchen = "kitchen stuff"
var storage = kitchen

console.log(storage)


// LESSON 1

var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

// LESSON 2

for(var i=0; i<10; i++) {
  console.log(i);
  i = i + 3; 
}
  
console.log("outside of the loop " + i);


// Lesson 3

function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);
getTotal([6, 5, 3, 7])
getTotal(["dog", "cat", "pizza"])