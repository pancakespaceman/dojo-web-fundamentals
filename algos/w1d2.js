// what is a variable?
// a container that holds a value, box

// EVerything in programming is data
// All data has types
// JS has Strings (text), Numbers, Boolean (true and false)


// just like how boxes can be reused, so can variables
// is vary, meaning its contents can change

// to be able to use the boxes and move them around properly, they need labels
// labels need to describe the contents of the box
// in the samw way, variable names need to describe the data inside them  

// do the names of variables matter to the computer? No

// to make a NEW variable in JS, we need the var keyword (special word that has a purpose, I.E. cannot be used for variables names)

var aaaaa = "Shawn"
var instructor = "Tyler"
var firstName = "Uchenna"
var lastName = "Smith"
var firstName = "John" // this removes the previous firstName variable and creates a new one
var firstNamee = "Bob" // this is not the same variable, even if its only 1 caracter different
lastName = "George" // this changes the value inside the variable

var ashdlajhstoanlzxchgalsdfngahhafgahruhvcxguharwohxcflkgquirhxcfjghvuarsihcxytyhraushagpsfdhgarouphagprygauprshgpuohapsthawrepushbvxzuchgqauehgdouczxaohtgcjzxghnapshtgzxcphajrehqanplgtdhaxcpghnqpathgdnaczxghnqaspuehg = "Is this a valid variable?"
console.log(ashdlajhstoanlzxchgalsdfngahhafgahruhvcxguharwohxcflkgquirhxcfjghvuarsihcxytyhraushagpsfdhgarouphagprygauprshgpuohapsthawrepushbvxzuchgqauehgdouczxaohtgcjzxghnapshtgzxcphajrehqanplgtdhaxcpghnqpathgdnaczxghnqaspuehg)

// As engineers, we follow conventions for nameing and other stuff to standardize
// In JS we use camcelCase, first word is lower case and subsequent words are capitalize

// Loops
// We often need to repeat a set of instructions multiple times
// To help our code concise, and to help our sanity, we dont want to write out each instruction one by one 50 bilion times
// allows us to write out a set of instructions that can be repeats as many times as we need

// FOR LOOP
// Loop variable , this is a variable declared specifically for this loop
// Condition, the loop will only run if the condition is true
// Increment/decrement step, modify the loop variable so as to make the condition false
// Increment step always runs as the very last thing, after the code block
for (var unicorns = 0; unicorns <= 10; unicorns += 2) {
  // curly braces denote a code block
  // where we put the code, or instructions, that run when the loop runs
  // I can put almost inifite lines of code in a code block
  console.log(unicorns)
}

console.log(unicorns)

// can we use this loop variable somewhere else? in JS, as long as we use the var keyword, yes 
// is it good practice? no