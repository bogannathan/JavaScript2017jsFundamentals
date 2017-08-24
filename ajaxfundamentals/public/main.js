$(document).ready(function(){
	$.ajax({  //ajax is a function that we are going to pass an object through 
		type:'GET',
		url: 'http://swapi.co/api/planets/'
	}).done(function(planets){
		// planets.results.forEach(function(e){
		// 	console.log(e.name)
		// })
		// for (let l in planets.results){
		// 	console.log(planets.results[l].name)
		// }
		for (planet of planets.results){
			// planet == planets[l]
			// console.log(planet.name)
		$(planetNames).append('<tr><td>' + planet.name + '</td></tr>')
		}	

	})
})

// starships": "https://swapi.co/api/starships/

$(document).ready(function(){
	$.ajax({  //ajax is a function that we are going to pass an object through 
		type:'GET',
		url: 'https://swapi.co/api/starships/'
	}).done(function(starships){
		for (ship of starships.results){
			$(shipNames).append('<tr><td>' + ship.name + '</td></tr>')
		}

	})
})

$(document).ready(function(){
	$.ajax({  //ajax is a function that we are going to pass an object through 
		type:'GET',
		url: 'https://swapi.co/api/people/'
	}).done(function(people){
		for (person of people.results){
		$(personNames).append('<tr><td>' + person.name + '</td></tr>')
		}

	})
})

let filmArray =[]
// $(document).ready(function(){
console.log(filmArray)

function findFilms(filmArray){
	$.ajax({ 
		type:'GET',
		url: 'https://swapi.co/api/films/'
	}).done(function(films){
		success: function(films){
		let filmArray = films.results
		callback(filmArray)
		}
	})
}

console.log(filmArray)

// let filmArray = function () {
// 		var tmp = null
// 		$(document).ready(function(){
// 		$.ajax({  //ajax is a function that we are going to pass an object through 
// 			async: 'false',
// 			type:'GET',
// 			url: 'https://swapi.co/api/films/'
// 		}).done(function(films){
// 			tmp = films.results
// 		})
// 		return tmp
// 	})
	// var input, filter, table, tr, td, i;
	// input = document.getElementById("input");
 //  filter = input.value.toUpperCase();
 //  table = document.getElementById("planetNames");
 //  tr = table.getElementsByTagName("tr");

 //  for (i = 0; i < tr.length; i++) {
 //    td = tr[i].getElementsByTagName("td")[0];
 //    if (td) {
 //      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
 //        tr[i].style.display = "";
 //      } else {
 //        tr[i].style.display = "none";
 //      }
 //    }       
 //  }
}()

console.log(filmArray)

$(submitButtonPlanets).click(searchPlanets)
$(input).keypress(function (e){
	if(e.keyCode === 13){
		searchPlanets();
	}

})

$(submitButtonShips).click(searchShips)
$(input).keypress(function (e){
	if(e.keyCode === 13){
		searchShips();
	}

})

function searchPlanets() {
	var input, filter, table, tr, td, i;
	input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("planetNames");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchShips() {
	var input, filter, table, tr, td, i;
	input = document.getElementById("input2");
  filter = input.value.toUpperCase();
  table = document.getElementById("shipNames");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// function searchPeople() {
// 	var input, filter, table, tr, td, i;
// 	input = document.getElementById("input");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("planetNames");
//   tr = table.getElementsByTagName("tr");

//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }



