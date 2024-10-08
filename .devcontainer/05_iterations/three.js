const arr = [1,2,3,4,5]

for (const num of arr){
 // console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings){
  //  console.log(`Each char is ${greet}`)
}

const map = new Map

map.set("IN","India")
map.set("US","United Stated")
map.set("UK","United Kingdom")
map.set("FR","France")
map.set("JP","Japan")
map.set("IN","India")

//onsole.log(map); //unique values will be printed

for (const key of map){
   // console.log(key);
    
}

for (const [key, value] of map){ //destructing of array
   // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}

for(const [key, value] of myObject){
    console.log(key, ':-', value);
    
}