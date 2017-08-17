// Arrays

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']]

console.log("Hello", students[6][1], "the Platypus.") //this creates three pieces, not one string. 
console.log("Hello " + students[6][1] + " the Platypus.") // concatenates 3 pieces into 1 string

let sentence = ["Hello", students[6][1], "the Platypus."]
console.log(sentence[0], sentence[1], sentence[2])
//Grab the nested array out of the students and grab perry 

let arrOfFood = ['Quesadilla', 'Mulberry pie', 'potato', 'Cheesecake', 'shrimp pasta']

// print out each with a for in loop
// console.log(arrOfFood.length)
// for (let i in arrOfFood) {
// 	console.log(arrOfFood[i])
// }


arrOfFood.push('Pizza')

arrOfFood.splice(1, 1, 'Blueberry Pie') // starts with firstwanted splice, how far to splice (in this case, start and end at 1), and additions starting atend of splice))
arrOfFood.splice(0, 0, 'green beans') // starts with the first item, 0 goes to before it and doesn't get rid, adds GB
//arrOfFood.pop()

for (let i of arrOfFood) { // this grabs the values of the array instead of numbers
	console.log(i)
}

for (let foodItem of arrOfFood) {console.log(foodItem)}

arrOfFood.forEach(function(banana){
	console.log(banana)
}) // function is inside the parentheses for each