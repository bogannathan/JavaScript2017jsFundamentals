const express = require('express')
const app = express(); //creates a variable that makes express a function
const http = require('http').Server(app)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
})
app.post('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
})

http.listen(3000, function(){
	console.log('listening on 3000')
})