let myName = "Mukti     "

//console.log(myName.length);

// console.log(myName.truelength()); 

let myHeros = ["thor","spiderman","wonderwoman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    wonderwoman: "strength",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Mukti = function(){
 //   console.log(`Mukti is present in all objects`);
    
}

Array.prototype.heyMukti = function(){
    //console.log(`Mukti says hello`);
    
}

//heroPower.Mukti()

myHeros.Mukti()
myHeros.heyMukti()
//heroPower.heyMukti()

const User = {
    name: "Chai",
    email: "chai@google.com"
}
//inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__= User
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport access all the properties of Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()

"hitesh".truelength()

"iceTea".truelength()