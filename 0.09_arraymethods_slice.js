var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

//First number is start.
//Second number is end. It will not print the end.
var numbersTwo = numbers.slice(0,3);
console.log(numbersTwo);

//We made a shallow copy, so the 
//original array is still in tact.
console.log(numbers);

var numbersThree = numbers.slice(4,9);
console.log(numbersThree);

console.log("");

var letters = ["a", "b", "c", "d", "e"];

var lessLetters = letters.slice(1,4);
console.log(lessLetters);

var fewerLetters = letters.slice(0,1) + letters.slice(4,5);
console.log(fewerLetters);

console.log(letters);