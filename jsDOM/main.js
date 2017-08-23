//document here means the document that is using this as a source

let input = document.getElementById("input");
let output = document.getElementById("output");
let nameList = document.getElementById('nameList') 
// console.log(input.value); 

function capitalize() {
	let newName = ""

	for (let l in input.value) {
		if (l == 0) {
			newName = input.value[l].toUpperCase()
		} else {
			newName += input.value[l].toLowerCase()
		}
	}
	input.value = ""
	output.innerHTML = "Capitalized name: " + newName
	nameList.appendChild(addListItem(newName));
}

// function clearField() {
// 	input.value = ""
// }

document.onkeypress = function (e) {
	if(e.keyCode === 13){
		capitalize();
	}
}

function addListItem(name) {
	let newEntry = document.createElement('li');
	newEntry.innerHTML = name
	return newEntry
}

//this receives an input, capitalizes it, and adds it to a list. The function capitalize capitalizes, then calles the function that adds a list element. 
//the function A L I carries the "innerHTML" property over, which is pushed to the innerHTML of the ul that #nameList IS CONNECTED to. 