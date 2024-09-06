// Lets get some information about a user

// Approach 1 - separate variables for each piece of data
var firstName = "Heidi";
var lastName = "Chen";
var email = "hc@dojo.com";
var password = "password";

// Approach 2 - put everything together into an array

var userArr = ["Heidi", "Chen", "hc@dojo.com", "password"];

// which index is the first name?
// the computer has NO IDEA

// Approach 3 - we introduce a new composite data type
// composite data type AKA collection AKA data structure

// Object
// Syntax: var myObj = {}

// objects do NOT have an index (by definition, they are unordered)
// key value pairs
// keys are basically variables, but contained inside of an object
// keys are written without quotes, but they are still strings

var userObj = {
  // key : value,
  firstName: "Heidi",
  lastName: "Chen",
  email: "hc@dojo.com",
  password: "password",
  displayFullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

// Accessing data inside an object

// Primary way we access data inside an object
// dot notation
// objVar.keyName

// console.log(userObj.firstName)
// userObj.displayFullName()

// Secondary way we access data inside an object
// bracket notation - the same that arrays use

// console.log(userObj["email"])
// var searchKey = "email"
// console.log(userObj[searchKey])

// var user1 = {firstName: "Spencer"}
// console.log(user1.firstName)

// var users = [
//   {firstName: "Shawn"},
//   {firstName: "Spencer"},
//   {firstName: "John"}
// ]

// console.log(users[0])

// Modifying an object

// add a new key value pair to the object
// just like assigning a variable

var dog = {
  name: "Vicky",
  hairColor: "brindle",
  age: 7,
};

// console.log(dog);

dog.favoriteToy = "Stuffed duck";

// console.log(dog);

// changing a key/value pair works the same way

dog.favoriteToy = "red spiky squeaky ball";
// console.log(dog);

// remove key
delete dog.favoriteToy;

// console.log(dog);

var dogs = [
  {
    name: "Vicky",
    hairColor: "brindle",
    age: 7,
    favoriteToys: ["duck", "ball"],
  },
  {
    name: "Leia",
    hairColor: "red & white",
    age: 3,
    favoriteToys: ["duck", "my hands"],
  },
  {
    name: "Shiro",
    hairColor: "white",
    age: 14,
    favoriteToys: ["stuffed star"],
  },
];

console.log(dogs[1].favoriteToys[0])


var user1 = {
  name: "shawn",
  address: {
    number: 123,
    street: "shawn st",
    city: "shawn city",
    state: "ca"
  }
}

console.log(user1.address.city)