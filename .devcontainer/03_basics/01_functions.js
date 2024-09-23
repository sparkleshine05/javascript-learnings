function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("T");
    console.log("I");
    
}

sayMyName // --- this is function reference

//sayMyName() //this is for function execution


// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
    

// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
    console.log("Mukti"); //no statement will be executed once something is returned from the function via return keyword
    
}

addTwoNumbers(3,4);

//addTwoNumbers(3,"4") // in function call we have arguments

//addTwoNumbers(3,null)

//const result = addTwoNumbers(3,8)

//console.log("Result is: " + result); //result is undefined as nothing is returned from function

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

function loginUserMessage2(username = "Javascript"){  //username has been assigned a default value with value "Javascript"
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}


//console.log(loginUserMessage("Mukti Bhargava"))

//console.log(loginUserMessage(""))

//console.log(loginUserMessage())

//console.log(loginUserMessage2())


function calculateCartPrice(...num1){  //rest operator

    return num1
    
}

//console.log(calculateCartPrice(200,400,500,600));


function calculateCartPrice2(val1, val2, ...num1){  //rest operator

    return num1
    
}

//console.log(calculateCartPrice2(200,400,500,600)); // 200 and 400 values will be assigned to val1 and val2


const user ={
    username : "Mukti",
    age: 37
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

//handleObject(user)

handleObject({    //direct object is passed to function call
    username: "Maverick",
    age: 56
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,500,600,700]));
