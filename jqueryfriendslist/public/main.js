let $friends = $(friends)
let $name = $(name)
let $age = $(age)

let friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend))
}

$(document).ready(function(){

	$.ajax({ // ajax is asynchronous. while one thing reads JS, ajax goes out and searches. 
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		success: function(friends) {
			$.each(friends, function(i, friend){
				addFriend(friend)
			})
		},

		error: function(){
			alert('error loading friends')
		}
	})


	$(addFriends).click(function(){
		let friend = {
			name: $name.val(),
			age: $age.val()
		}
			if ($(name).val() != "") {
				$.ajax({
					type: 'POST',
					url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
					data: friend
				})
		}
	})

	$friends.delegate('.remove', 'click', function(){
		var $li = $(this).closest('li');
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall/' + $(this).attr('id'),
			success: function(){
				console.log("delete");
				// $li.remove();
				$li.fadeOut(300, function(){
					$(this).remove();
				})
			}
		});
	})
})
	
// $(input3).keypress(function(e){
// 	// let person = {
// 	// 	name: $(input2).val(),
// 	// 	age: $(input3).val()
// 	// }

// 	if (e.keyCode == 13) {
// 		console.log("keypress")
// 		if ($(input2).val() != "") {
// 			console.log("hello")
// 			$.ajax({
// 				type: 'POST',
// 				url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
// 				data: person
// 			}).done(function(data){
// 	})
// 		}
// 	}

// })
	




// })