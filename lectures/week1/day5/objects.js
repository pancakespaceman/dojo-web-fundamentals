// Arrays
var userArr1 = ["Heidi", "Chen", "hc@dojo.com"]
var userArr2 = ["hc@dojo.com", "Heidi", "Chen"]

// Objects
// composite data type
// DONT NOT have indexes
// key / value pairs -- these work just like normal variables
// syntax --- {} -- key: value,

var userObj1 = {
  firstName: "Heidi", 
  lastName: "Chen",
  email: "hc@dojo.com"
}

var userObj2 = {
  firstName: "Tyler",
  lastName: "Thibault",
  email: "tt@dojo.com"
}

// Access the object in two ways
// 1. (primary way in JS) dot notation  --- obj.keyname
// 2. (less used but still is useful) bracket notation (like arrays) --- obj["keyname"]

console.log(userObj1.firstName)
console.log(userObj2.firstName)


var userObj3 = {
  firstName: "John", 
  lastName: "Misirlakis",
  email: "jm@dojo.com",
  address: {
    houseNumber: "235",
    street: "John St.",
    city: "Johnville",
    state: "Arizona",
    zipCode: "23651"
  },
  favoriteFoods: [
    "pizza",
    "crayons",
    "lumpia",
    "tomato",
    "fries",
    "sushi",
    "blue takis",
    "taco bell mexican pizza"
  ]
}

console.log(userObj3.address)
// how do I access an object inside another object or an array inside an object
console.log(userObj3.address.houseNumber)
console.log(userObj3.favoriteFoods[1])


// how do I add more things to an object
var dog = {
  name: "Soup",
  hairColor: "brown"
}

dog.age = 3

console.log(dog)

// how to remove a key/value pair
delete dog.age
console.log(dog)

// how do I check if an object contains a specific key?
// hasOwnProperty returns a boolean
if (dog.hasOwnProperty("name")) {
  console.log("The dog has a name", dog.name)
}

if (dog.hasOwnProperty("toys")) {
  console.log("The dog has some toys")
} else {
  console.log("poor doggo")
}

// a JS object is very similar to Python Dictionaries or Java hashmaps