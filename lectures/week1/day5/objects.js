// Objects
// is a composite data type
// aka. collection, data structure

// Arrays have pros and cons
// pros: indexed, collection, list

// what if I wanted to get user information
// arrays can have multiple data types
var userArr = ["Shawn", "Converse", 31, "sc@dojo.com"];

// Objects do not have indexes
// can be mixed data types
// key / value pairs
// syntax: objects are denoted with {}
// syntax: keys are strings but JS allow us to not put the quotes
// syntax: values are just data
// syntax: key: value,

var userObj1 = {
  firstName: "Shawn",
  lastName: "Converse",
  age: 31,
  email: "sc@dojo.com",
};

var userObj2 = {
  firstName: "Heidi",
  lastName: "Chen",
  age: 27,
  email: "hc@dojo.com",
};

// Access data inside of Objects
// two ways

// Method #1: dot notation
// this is the primary way we access objects
// obj.key
// console.log(userObj1.firstName);
// console.log(userObj1.lastName);
// console.log(userObj1.age);
// console.log(userObj1.email);
// console.log(userObj2.firstName);
// console.log(userObj2.lastName);
// console.log(userObj2.age);
// console.log(userObj2.email);

// Method #2: access the key like its an index
// like accessing an array, but instead of an index we provide the key as a string
// obj["key"]

// console.log(userObj1["firstName"]);

// var keyName = "email";

// console.log(userObj1[keyName]);

// Changing / Adding things to the object
// change a value, we just access the object by the key and set it to a value
// add a value, we do the same

var dog = {
  name: "Vicky",
  age: 7,
  hairColor: "brindle",
};

// assignment operator to assign the value for that key
dog.age = 8;

// add a new key?
dog.favoriteToy = "ball";

// console.log(dog);

// Objects
// by definition, have no order

var dog2 = {
  name: "Leia",
  age: 3,
  hairColor: "red and white",
  dogInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Hair Color: ${this.hairColor}`);
  },
};

// dog2.dogInfo();

// Delete a key/value pair

delete dog2.hairColor;

console.log(dog2);

var listOfDogNames = {
  name1: "vicky",
  name2: "leia",
};

var list = ["vicky", "leia", "shiro"];

var user1 = { name: "Shawn" };

var rsvpers = [
  { name: "Shawn" },
  { name: "Heidi" },
  { name: "John" },
  { name: "Spencer" },
];

for (var i = 0; i < rsvpers.length; i++) {
  console.log("Hello there,", rsvpers[i].name);
}

function sendEmail(list) {
  // loop through the list
  // send email to each person on the list
}
