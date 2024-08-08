// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"

let storeName="CSH Store"
console.log("Welcome to "+ storeName)
// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 
let randomUser={
	username: "dxnisse_",
	password: "hello12345",
	status: "online"
}

// Task 3: Console log "[username] is [status]".
console.log(randomUser.username + "is"+ randomUser.status)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
let question= prompt("Enter your password")
let passwordGuess= question
// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"
if(passwordGuess==randomUser.password){
	console.log("Welcome "+ randomUser.username)
	randomUser.status = "online"
}else{
	console.log("wrong password")
	randomUser.status = "offline"
}



// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 
let hoodieInventory={
	name: "hoodie",
	quantity: 61,
	price: 20
}



// Task 7: Console log "[name] costs [price]"
console.log( hoodieInventory.name + " cost " +hoodieInventory.price)
// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
  console.log(hoodieInventory.quantity-1  +  hoodieInventory.name + " left in the inventory")


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

