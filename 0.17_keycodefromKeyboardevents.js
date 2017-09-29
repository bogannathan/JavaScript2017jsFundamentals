//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
//use e.which

$(searchRes).keypress(function (e){
	if(e.which === 13){
		findMovies()
	}

})

//if input field searchres gets a keypress of enter, the function findmovies will run. 