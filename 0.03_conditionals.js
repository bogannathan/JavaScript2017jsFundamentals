// Conditionals

// Chaining conditional operators
//	&&
	//

var name = "jaaaaaaaaaaaaaaaaaaaaaaaaaaaay"
// if ("KENN" == name.toUpperCase()) {
// 	console.log("Hey, your name is " + name)
// } else {
// 	console.log("What is your name?")
// }
// var firstLetter = name.charAt(0);
var firstLetter = name[0];

if (firstLetter != firstLetter.toUpperCase()) {	
	var uppercaseFirstLetter = firstLetter.toUpperCase()
	var nameWithoutFirstLetter = name.slice(1)
	name = uppercaseFirstLetter + nameWithoutFirstLetter
	console.log(name)
	console.log(uppercaseFirstLetter + " was capitalized")
} else {
	console.log(name + " is already capitalized! Wow. ")
	}



