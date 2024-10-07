//singleton through constructors, a singleton is always made


//object literals


const mySymbol = Symbol("key1")

const JsUser = {
    name: "Mukti",
    "full name": "Mukti Bhargava", // this full name cannot be accessed by dot operator and it can be accessed by []
    [mySymbol]: "myKey1",
    age: 37,
    location: "Pune",
    email: "mukti.b@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}



// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser.mySymbol);


JsUser.email = "mukti.bhargava05@yahoo.com";
//console.log(JsUser["email"])
//Object.freeze(JsUser);

JsUser.email = "mukti.bhargava05@microsoft.com";
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting); //function reference
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greetingTwo());