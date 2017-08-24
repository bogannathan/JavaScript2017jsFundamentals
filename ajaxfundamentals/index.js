const express = require('express'); //const can not be given a new value
const app = express(); // parens required to run express, no parens and JS doesn't use it. makes it possible to run as function
const http = require('http').Server(app); 

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/challenge.html")
}); 

http.listen(3000, function(){
	console.log("Listening on port 3000:");
})
