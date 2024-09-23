const user = {
    username: "Mukti",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); /// this refers to the current context
        console.log(this);
        
    }

}

/* user.welcomeMessage()

user.username = "Sam"

user.welcomeMessage() */

//console.log(this);


/* function chai(){

    let username = "Vivek"
    console.log(this.username); //this context works only inside the object and not the function
    //console.log(this);
}

chai() */

/* const chai = function(){
    let username = "Rutherford"
    console.log(this.username);
    
} */

const chai = () =>{
    let username = "Sunita"
    console.log(this)
    console.log(this.username)
}

//chai()

/* const addTwo = (num1,num2) => {
    return num1+num2
} */

//const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => ({username: "Mukti"})

console.log(addTwo(3,4));

const myArray = [2,3,4,5]

//myArray.forEach(() => {})


