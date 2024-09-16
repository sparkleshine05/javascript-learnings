//Dates

let myDate = new Date();

console.log(myDate.toString());

console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23); //in JS, months starts from 0

console.log(myCreatedDate.toDateString());


let newDate = new Date();

console.log(newDate);


newDate.toLocaleString('default',{
    weekday:"long",
})