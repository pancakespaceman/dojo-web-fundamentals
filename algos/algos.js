// var is how we build the box so we can use it
var firstNamee
firstName = "Jasmine"
console.log(firstName)

// let and const are other ways of building a box
let lastName = "Converse"
const occupation = "Instructor"


var isThisAValiDVariable = "Yes or no?"
console.log(isThisAValiDVariable)

var is_this_a_valid_variable  = "Yes  or no?"

console.log(is_this_a_valid_variable)


var hdsfgjansdljkaklgjnraovnsfdvljnsrdlkbsnfdhlwbmtisnbsltkrdhibweltksdjfhgpibsdmfilhgkgjsdmflxighkjsdfmxilgkjsdmrfxzilgkjbsdmfipxhkgjbsnmediflkhjbsnmdtifkhjbsmdpfixkhjsmdfizxkghmsdpifxzkhjmsdifxzkhjsmdfxzkhjsdbmfzxkvhsdmfxzihdsfgjansdljkaklgjnraovnsfdvljnsrdlkbsnfdhlwbmtisnbsltkrdhibweltksdjfhgpibsdmfilhgkbjsdmflxighkjsdfmxilgkjsdmrfxzilgkjbsdmfipxhkgjbsnmediflkhjbsnmdtifkhjbsmdpfixkdsbfjmxhipskdfjxhm = "Test"
console.log(hdsfgjansdljkaklgjnraovnsfdvljnsrdlkbsnfdhlwbmtisnbsltkrdhibweltksdjfhgpibsdmfilhgkgjsdmflxighkjsdfmxilgkjsdmrfxzilgkjbsdmfipxhkgjbsnmediflkhjbsnmdtifkhjbsmdpfixkhjsmdfizxkghmsdpifxzkhjmsdifxzkhjsmdfxzkhjsdbmfzxkvhsdmfxzihdsfgjansdljkaklgjnraovnsfdvljnsrdlkbsnfdhlwbmtisnbsltkrdhibweltksdjfhgpibsdmfilhgkbjsdmflxighkjsdfmxilgkjsdmrfxzilgkjbsdmfipxhkgjbsnmediflkhjbsnmdtifkhjbsmdpfixkdsbfjmxhipskdfjxhm)

// Variable names should describe the information they hold
var firstName = "Shawn"
var name = "Converse" // this is okay, but could be better
var dogName = "Vicky"
 
// DATA TYPES
// primitive data types
// STRINGs -> text "5" + '5' = "55"
// Numbers -> 5 + 5 = 10
// Booleans -> TRUE and FALSE 0011101010101   0 = False 1 = True    7  = 111  8 = 1000

// composite data types
// array

// PREDICT THE OUTPUT 1

var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");


// PREDICT THE OUTPUT 2
for(var i=0; i<10; i++) {
  console.log(i);
  i = i + 3; 
}
  
console.log("outside of the loop " + i);


// PREDICT THE OUTPUT 3
function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);




