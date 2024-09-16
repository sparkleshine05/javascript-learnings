//primitive and non primitive data types

//Primitives
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 257946136945679n



// Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"] //array

let myObj =   //object created
{
    name : "Mukti",
    age : 37,
}

const myFunction = function() {
    console.log("Helo World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

console.log(typeof myFunction);


// ====================================================MEMORIES==============================================================

// Stack (Primitive), Heap (Non-Primitive) //in stack we get a copy of the variable whereas in heap we get the value by reference

let myYouTubename = "mukti.bhargava@gmail.com"

let anothername = myYouTubename
anothername = "mukti@gmail.com"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mukti@google.com"

console.log(userOne.email);
console.log(userTwo.email);

