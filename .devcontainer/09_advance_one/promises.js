const promiseOne = new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){ //.then has directly connection with resolve, through .then we get a callback
    console.log("Promise consumed");
    
})