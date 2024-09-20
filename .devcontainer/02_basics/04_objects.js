//const tinderUser = new Object() //this is a singleton object

const tinderUser = {} //this is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sushmita"
tinderUser.isLoggedIn  = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            Firstname: "Mukti",
            Lastname: "Bhargava"
        }
    }
}


//console.log(regularUser.fullname.userfullname.Firstname);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1,...obj2}

const obj4 = Object.assign(obj1,obj2)

const obj5 = Object.assign({},obj1,obj2)

//console.log(obj3);
//console.log(obj4);
//console.log(obj5);

//when values come from database

const users = [
    {
        id: 1,
        email: "mukti.bhargava@gmail.com" 
    },
    {
        id: 2,
        email: "dummyuser@gmail.com"
    }
]

users[1].email

console.log(tinderUser);


console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

