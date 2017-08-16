// loops

/*
	lcv = loop control variable

	for loop
	----------------

	while loop 
	----------------

	for in loop
	----------------
	
	do while loop
	----------------
		runs at least once
	*/

// initialize variable, add boolean, and find a way to "step through", or end the loop. 
// for (var i = 0; i <= 10; i += 1){ // i ++, i+= 1, and i + 1 all same. 
// 	console.log(i)
// }

// for (var i = 0; i <=20; i += 2){
// 	console.log(i)
// }

// // best practice?

// var name = "Kenn"
// for (var i = 0; i < name.length; i++) {
// 	console.log(name[i])
// }


// {} represent code blocks
// boolean goes inside ()
// var j = 0 // initial variable outside
// while (j < 5) {
// 	//step through happens inside the code block
// 	j ++
// 	console.log(j)
// 	return false // return makes the code fail right away
// }

// console.log(j*5)
		


// while (j<55) {
// 		j = i +1
// 	for (var i = 0; i <=20; i += 2){
// 	console.log(i)
// 	}
// 	console.log(j)
// }
// var m = 0
// while (m<100) {
// 	m += 10
// 	console.log(m)
// }

// for in loop, aka for each. applies a variable to a collection 

var studentName = "smITa"
//   lcv            collection
var switchedName = ""
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

// for (var letter in studentName) {
// 	if (letter == 0) {
// 		switchedName = studentName[letter].toUpperCase()
// 	} else {
// 		switchedName += studentName[letter]
// 	}
// }
	console.log(switchedName)
