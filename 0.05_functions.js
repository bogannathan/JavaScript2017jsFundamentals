// functions


function greeting () {
	console.log("Good morning.")
}

greeting()

// create a function that says "Day 4 feeling great!"

function notTrue() {
	console.log("Day 4 feeling great!")
}

notTrue()

function greeting2(name, age, height) {
	console.log("Time to start coding " + name + " " + age + " " + height)
}

greeting2("Jay", "7")

function sum2(num1, num2) {
	console.log(num1 + num2)
}

sum2(2, 4)


var fName = "AJ"
var lName = "unknown last name"
function hello(fName, lName){
	if (lName=false) {
	} else {
		lName = "Hephner"
	}
	console.log(fName + " " + lName)
}
console.log(lName)
hello(fName)

if (1==1) {
	sum = 5+1
	console.log(sum)
}

console.log(sum)

//create function called capitalize() and use for loop we created yesterday to capitalize names
//var studentName = capitalize
function capitalize(studentName) {
	let switchedName = ""
		for (var letter in studentName) {
			if (studentName[letter] != studentName[letter].toUpperCase()) {
				var thisLetter = studentName[letter].toUpperCase()
				//studentName[letter] = studentName[letter].toUpperCase()
				
			} else {
				var thisLetter = studentName[letter].toLowerCase()
			} 
			switchedName = switchedName + thisLetter
			// console.log(studentName)
			// console.log(studentName)
			// console.log(studentName[letter].toUpperCase() + studentName.slice(1))
			// break
		}
		return switchedName
}

function caps(name){
	let restOfName = name.slice(1)
	let newName = name[0].toUpperCase() + restOfName.toLowerCase()
	// name = name + restOfName
	// for (var i = 1; i = name.length; i++) {
	// 	Things[i]
	// 	if ()
	// }
	return newName
}		

console.log(capitalize("smA"))
console.log(caps('jOHn'))
// LET keeps variables local no matter what. Best practice to use let. parent let is used by child unless rename
// var inside if can be accessed outside (although with no value), var in for cannot be accessed outside. let best
//