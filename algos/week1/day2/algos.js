// var name = "data";

// var isThisAValidVariableName = "Banana";
// console.log(isThisAValidVariableName);

// var how_about_this_is_this_a_valid_variable = "megatron";
// console.log(how_about_this_is_this_a_valid_variable);

// var ghasdhdfasdhflaksjdhfiasdhfjaxchkfszydhflkgjashdlvzchxvljszdhfogiasdhlvcxzhgaoirhgzlxdchoasidfhnvalkcxhgalsrhgoaxcihvalksdfhgoaisdghvzxclghsoaidyhgcglkhsaedflkgzhoizdfhgoaseidfhgslxkfhgsaoilefyghasoerighzclkghsrdoihgwsaefoihg =
//   "hahaha";
// console.log(
//   ghasdhdfasdhflaksjdhfiasdhfjaxchkfszydhflkgjashdlvzchxvljszdhfogiasdhlvcxzhgaoirhgzlxdchoasidfhnvalkcxhgalsrhgoaxcihvalksdfhgoaisdghvzxclghsoaidyhgcglkhsaedflkgzhoizdfhgoaseidfhgslxkfhgsaoilefyghasoerighzclkghsrdoihgwsaefoihg
// );

// var firstName = "Shawn";
// var name = "Shawn";

// var name = "Timothy"; // original way to make variables in JS
// let anotherName = "Matthew"; // new preffered way to make variables in JS
// const yetAnotherName = "Michael"; // constant, variable cannot be changed

// var x = null;
// console.log(x);


// FOR loops and WHILE loops
// loop variable
// for(let banana = 0; banana === false ; banana++ ) {
//   console.log("Hello there")
// }

// while (true) {
//   console.log("General Kenobi")
// }



// LESSON 1
// var a = 25;
// a = a - 13;
// console.log(a/2);
    
// a = "hello";
// console.log(a + " hello");


// LESSON 2
// for(var i=0; i<10; i++) {
//   console.log(i);
//   i = i + 3; 
// }
  
// console.log("outside of the loop " + i);


// LESSON 3
function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);