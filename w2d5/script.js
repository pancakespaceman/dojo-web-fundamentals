// BAD 
// a = 5
// b = 7
// c = a + b
// console.log(c)
// a = 24
// b = 73
// c = a + b
// console.log(c)
// a = -124
// b = 56
// c = a + b
// console.log(c)
// a = 23
// b = 67
// c = a + b
// console.log(c)
// a = 234
// b = 53
// c = a + b
// console.log(c)
// a = 234
// b = 54
// c = a + b
// console.log(c)




// DEFINE FUNCTION
function addTwoNums(a, b) {
  c = a + b
  console.log(c)
}

// CALL FUNCTION (INVOKE)
// addTwoNums(5, 7)
// addTwoNums(24, 63)
// addTwoNums(-5, 8)
// addTwoNums(28, 99)
// addTwoNums(100, 343)
// console.log("hello there")
// Math.random()
// Math.floor()
// arr.split()


function rollDice() {
  var diceRoll =  Math.floor(Math.random() * 6) + 1;

  return diceRoll;

  // return  Math.floor(Math.random() * 6) + 1;
}



console.log(rollDice())


"script.js"

"cat"
"car"
"cats"



function main() {
  console.log("Hello there.")
} // JavaScript

def main(): // Python
  print("Hello there")

public static void main() {
  System.out.println("Hello there");
} // Java

int main() {
  printf("Hello There");

  sys.out >> "Hello there";
} // C/C++

var arr = ["dog", "cat", "bird", "fish"]

for (const elem of arr) {
  console.log(elem)
} // JavaScript

for elem in arr:
  print(elem)
// Python

for (let i = 0; i < 10; i++) {
  console.log(i)
} // JavaScript

for i in range(10):
  print(i) // Python


function rollDice() {
  return Math.floor((Math.random() * 6)) + 1
}

def rollDice():
  return randInt(1, 7)


// Function is a set of instructions
function orderSushi() {
  // take order
  // put order in POS
  // cook with make sushi
  // waiter will pick up the sushi
  // waiter will take sushi to customer
  // waiter give the sushi to the customer
  var sushi = "hamachi nigiris";

  console.log(sushi); // waiter telling me my sushi is done, then walking away
  return sushi; // waiter giving me my sushi
  // return is a statement, not a function
}

function heatHotPocket() {
  // put hotpocket in microwave
  // set time
  // press start
  // wait for the time to finish
  // take out the hotpocket
}

heatHotPocket()

orderSushi()
orderSushi()
orderSushi()
orderSushi()
orderSushi()
orderSushi()
orderSushi()
orderSushi()



// pseudocode
// writing out the steps for the algo in english


var arr1 = [0, 1, 2, 3, 4]

function reverseArray(arr) {
  // SETUP
  // Make a new array to contain the reversed version
  var newArr = []

  // WORK
  // Loop through the array backwards
  // start at the end
  // loop to the beginning, including the first value
  // remember to decrement i
  for (let i = arr.length - 1; i >= 0; i--) {
    // add element at the current index to the new array
    newArr.push(arr[i])
  }

  // RETURN
  // return the new array
  return newArr
}


reverseArray(arr1)
