
//iife, using a global variable inside of a function on a  does not change the value of the global variable. 
//immediately invoked function expression, the parens pre function auto runs it. 
//variables inside iife are not hoisted. 
// let i = 4;

(function() {
	for (var i = 1; i <= 10; i++) {
		console.log(i)
	}
})();

// this creates privacy and protects against overlapping vars 

for(var i=1;i<=100;i++){
    if (i%15==0) {
    	console.log("FizzBuzz")
    }
    else if (i%5==0) {
    	console.log("Fizz")
    }

    else if (i%3==0) {
    	console.log("Buzz"); 
    }
    else {
    	console.log(i)
    }
}

for (i of "string") {
	console.log(i)
}