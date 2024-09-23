// Immediately Invoked Function Expressions (IIFE)

(function chai() {

    //named IIFE as it has function keyword
    console.log(`DB Connected`); 
    
}) ();

//chai()

(() => {
    console.log(`DB connected Two`);
    
})();

((name) => {
    console.log(`DB Connected Three ${name}`);
    
})('Mukti')