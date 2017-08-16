// // Variables

// var name = "Madyson"

// console.log(typeof(name))
// var lastName = "Ward"

// console.log(name + lastName)
// console.log(name.length + lastName.length)
// lastName = "Jackson" // not adding var in front swaps a value out instead of creating a new box with the same name. faster coding this way 
// var fullName = name + " " + lastName
// console.log(fullName)

// // Variables data types

// // Variables scopes

// var name = "nathan"
// var age = 25
// var date = 08062017
// var icecream = "cookie dough"
// var day = "tomorrow"
// console.log(name)
// console.log(age)
// console.log(date)
// console.log(icecream)
// console.log(day)

var myNumber = 0
// myNumber = 0 + 10
myNumber += 10 //is shorthand for above
myNumber = myNumber - 1
myNumber = myNumber * 9
myNumber = myNumber / 7
console.log(myNumber)

var currentAge = 25
var maxAge = 47
var totalDays = (maxAge-currentAge) * 365
var perDay = 5000
var money = ""
var needed = "dolla dolla bills earned"
if (needed == "dolla dolla bills earned") {
	money = "$"
}
var totalNeeded = (totalDays * perDay).toLocaleString()
var howOld = "ripe"
if (maxAge < 50) {
	howOld = "not so"
}
console.log("You will need " + money + totalNeeded +" " + needed + " to last you to the " + howOld + " ol' age of " + maxAge)