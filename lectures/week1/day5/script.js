console.log("Hello from the script.js file")


function foo() {
  console.log("This console log is from the foo function in my js file")
}


function bar() {
  console.log("you hovered over the p tag")
}


var number = 1;
var letters = ["A", "B", "C", "D", "E"]
function compute(){
	for(var i = 0; i < letters.length; i++){
		if(i == 1){
			number = number + number * number
			return number + letters[i]
		}
	}
	return number + letters[i]
}
var answer = compute();
console.log(answer);