

//FUNCTIONS 

//1. Defining the Function

function orderTacos(meat, salsa, amount, money) {
  // add the money to the cash register

  var tacos = meat + ", " + salsa

  // String Interpolation
  // make a string and put the values of variables directly inside of them
  // don't use quotes, rather they use back tics
  // variables are placed inside of a ${}
  console.log(`You purchased ${amount} ${tacos} tacos for $${money}`)

  // Return statement
  // gives what ever value you put in the statement back to the function call
  return console.log()
}


// 2. Calling (invoking) the function

var bag = orderTacos("Al Pastor", "Salsa Verde", 12, 20)
console.log(bag)
// orderTacos("Lengua", "Salsa Roja", 100000, 20)

// console.log(console.log("Hello there"))
