
//iife, using a global variable inside of a function on a  does not change the value of the global variable. 
//immediately invoked function expression, the parens pre function auto runs it. 
//variables inside iife are not hoisted. 
let i = 4;

(function() {
	let e
	return whatever
})();

// this creates privacy and protects against overlapping vars 