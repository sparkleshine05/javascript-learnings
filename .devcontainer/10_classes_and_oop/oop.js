const user = {
    username: "Mukti",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        //console.log("Got user details from Database");

       // console.log(`Username: ${this.username}`);

      // console.log(this);  
        
    }
}

const user2 = {
    username: "Mukti",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        //console.log("Got user details from Database");

       // console.log(`Username: ${this.username}`);

       //console.log(this);  
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

//constructor function ----> constructor function gives a new instance every time

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

   // console.log(this);

    this.greeting = function(){
        //console.log(`Welcome ${this.username}`);
        
    }
    

   // return this
}

const userOne = new User("Mukti", 8, true)  
// --> when we use new keyword then first of all an empty object is created which is called instance
// --> constructor function is called because of new keyword
// --> all the arguments get injected inside the this keyword
// --> we get all inside a function
const userTwo = new User("Chai", 10, true)

console.log(userOne.constructor);
//console.log(userTwo);

///look for instanceof in google



