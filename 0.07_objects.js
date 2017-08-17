// objects 

let food = {
	pies: ['Pecan', 'Mulberry', 'Blueberry', 'Cherry', 'Key lime'],
	getPies: function() {
		// console.log(this)
		return this.pies; //this is the current objects. 
	},
	pieNames: function() {
		return this.pies.forEach(function (whichPie) {
			console.log([whichPie] + " pie")
		})

	},
	pieNames2: ['cream', 'purple'],
	addPies: function() {
		// food.pies.forEach(function(flavor){
		// 	food.pieNames2.push(flavor)
		// })
		this.pieNames2 = food.pieNames2.concat(food.pies)
		return this.pieNames2.forEach(function(whichPie) {
		console.log(whichPie + " pie") 
		})
	}
}

//console.log(food.pieNames2)
food.addPies()
console.log(food.pies)
//food.pieNames()
// console.log(food.pieNames2)
 //console.log(food.pies[4] + " pie") //log is a property. pies is a property for object food. 
 // iterate over the pconie array and print out each pie

 // food.pies.forEach(function (whichPie, other) {
 // 	if (other >= 2){
 // 		console.log([whichPie] + " pie")
 // 	}
 // })

 //console.log(food.getPies())
// food.getPies()
// create a method inside of the object food that appends ' pie' to the list

//food.pieNames()
// food.addPies()
//console.log(food.addPies())