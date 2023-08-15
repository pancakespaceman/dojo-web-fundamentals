// JS Objects
// composite data type AKA collection AKA data structure
// DO NOT have indexes  -- by definition, objects are unordered
// key / value pairs --- work just like variables (key is the name of the var. value is the value assigned)
// JS object is denoted with {}  -- key: value,

// arrays are not helpful when we need to specific different pieces of data
// how am I supposed to know that index 0 is the first name
var userArr = ["Heidi", "Chen", "hc@dojo.com"]

// JS Object allows us to group together all this data
var userObj = {
  firstName: "Heidi",
  lastName: "Chen",
  email: "hc@dojo.com"
}


// how do we access the things inside of an object
// we use dot notation
console.log(userObj.firstName)
console.log(userObj.email)

var userObj2 = {
  firstName: "Tyler",
  lastName: "Thibault",
  email: "tt@dojo.com",
  favoriteFoods: [
    "pizza",
    "tacos",
    "soup"
  ],
  address: {
    houseNumber: "235",
    street: "Tyler St",
    city: "Tylerville",
    state: "TX",
    zipCode: "98234"
  }
}

console.log(userObj2.firstName)
console.log(userObj2.address.street)
console.log(userObj2.favoriteFoods[1])


// Add a new key/value pair
userObj2.username = "tylert"

console.log(userObj2)


// how can we check if a key exists in an object
// hasOwnProperty() function
console.log(userObj2.hasOwnProperty("dfalsh"))