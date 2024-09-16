const accountId = 144553

let accountEmail = "mukti@google.com"

var accountPassword = "12345"

accountCity = "Pune"

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "mukti@yahoo.com"

accountPassword = "123456789"

accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])

/* Prefer not to use var because of issue in block scope and functional scope */