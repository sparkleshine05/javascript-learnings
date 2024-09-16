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
