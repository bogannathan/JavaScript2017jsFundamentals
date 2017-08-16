// Conditionals

// Chaining conditional operators
//	&&
	//

// var name = "jaaaaaaaaaaaaaaaaaaaaaaaaaaaay"
// // if ("KENN" == name.toUpperCase()) {
// // 	console.log("Hey, your name is " + name)
// // } else {
// // 	console.log("What is your name?")
// // }
// // var firstLetter = name.charAt(0);
// var firstLetter = name[0];

// if (firstLetter != firstLetter.toUpperCase()) {	
// 	var uppercaseFirstLetter = firstLetter.toUpperCase()
// 	var nameWithoutFirstLetter = name.slice(1)
// 	name = uppercaseFirstLetter + nameWithoutFirstLetter
// 	console.log(name)
// 	console.log(uppercaseFirstLetter + " was capitalized")
// } else {
// 	console.log(name + " is already capitalized! Wow. ")
// 	}
var age = 16
if (age >= 18) { // order matters. if 28, only vote will run, because rest of statement canceled. switch order, and 25 runs. 
	console.log("vote")
} else if (age >= 25) {
	console.log("lower rates")
} else {
	console.log("too young for fun")
}

