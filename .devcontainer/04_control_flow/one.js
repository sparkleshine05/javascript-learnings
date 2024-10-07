//if

const isUserloggedIn = true
const temperature = 41

if(temperature < 50){
    console.log("less than 50");
    
} else {
    console.log("greater than 50");
    
}


const balance = 1000

if(balance > 500){
    console.log("balance is less");
    
}


// <,>,<=,>=,==, !=, ===(used for matching value and datatype also)

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail =  true;

if(userloggedIn && debitCard & 2==3){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User logged in");
    
}