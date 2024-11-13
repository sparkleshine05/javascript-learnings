class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    
    static createId(){
        return `123`
    }
}

const Mukti = new User("Mukti")
console.log(Mukti.createId())