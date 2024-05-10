// JS Objects


// What is it?
// composite data type, aka data structure, aka a collection
// objects are a collection of key/value pairs

// How do we make an object?
// use denote an object with curly braces
var user = {
  firstName: "Shawn",
  lastName: "Converse",
  email: "sc@dojo.com",
  age: 30,
  favoriteFoods: ["adobo", "sushi", "tacos"]
}

var user2 = {
  firstName: "Spencer",
  lastName: "Rauch",
  email: "sr@dojo.com",
  age: 30,
  favoriteFoods: ["adobo", "sushi", "tacos"]
}

// How do we access the things inside of an object?
// two methods
// Primary way we access objects is using dot notation
user.firstName
user2.firstName

// Another way is to pass in the key as if it was an index
user["firstName"]
var key = "lastName"
user[key]

// nested data structures
var myObj = {
  anotherObj:  {
    thing: "stuff"
  }
}
user.favoriteFoods[0]
myObj.anotherObj.thing


// How do we add something to an object?
// obj.newKey = something
user.favoriteColor = "red"
// console.log(user)


// How do we change a value in an object?
// obj.key = newValue
user.favoriteColor = "blue"
// console.log(user)


// How do we remove from an object?
// delete obj.keyName
delete user.favoriteColor
// console.log(user)


// How do we check if a key exists in an object?
// obj.hasOwnProperty("key") => boolean
// console.log("user has favorite food:", user.hasOwnProperty("somethingWlse")) 


// How do we iterate through an object?
// for..in syntax

for (const key in user) {
  console.log("key in user:", key)
  console.log("value of key", user[key])
}