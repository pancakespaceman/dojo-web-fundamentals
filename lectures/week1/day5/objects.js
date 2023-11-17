// JavaScript Objects

// another composite data type (collection, data stucture)
// objects are great for combining together a bunch of related information but allows us to know in our code
// what the data represents
// Objects DO NOT use indexes
//  key / value pairs

// This is not a good solution for storing user information
var userArr1 = ['Max', 'Rauchman', 30, 'mr@dojo.com', 'C#', 'Rocky Road']
// console.log(userArr1[4]) // what is the data at index 4 supposed to represent

// Object Syntax: objs use curly braces, key: value
var userObj1 = {
  firstName: 'Max',
  lastName: 'Rauchman',
  age: 30,
  email: 'mr@dojo.com',
  prefferedStack: 'C#',
  favoriteIceCreamFlavor: 'Rocky Road'
}

// console.log(userObj1)


// How do I access the different keys in an object?
// Main way is to use dot notation
console.log(userObj1.firstName)
console.log(userObj1.lastName)
console.log(userObj1.favoriteIceCreamFlavor)


// Other way to access an object is to put the key as string inside square brackets (like an array)
console.log(userObj1['prefferedStack'])
var key = 'email'
console.log('Here is accessing the object useing a var', userObj1[key])


// change or add a value to an object is just obj.key = value
userObj1.favoriteIceCreamFlavor = 'Chocolate'
console.log(userObj1.favoriteIceCreamFlavor)

userObj1.hobby = 'Gaming'
console.log(userObj1)