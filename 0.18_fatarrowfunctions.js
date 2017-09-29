// fat arrow function are a mroe concise way to write functions
let x = function () {
  //code
}

let x = () => {
  //same code
}

//it also changes the way "this" functions
//"this" within a fat arrow function does not refer to the context of the function, but goes up on level
// that is, it maintains the scope of the caller.

aAsync().then(function() {
    returnbAsync();
}).then(function() {
    returncAsync();
}).done(function() {
    finish();
}); is ES5

aAsync().then(() => bAsync())
.then(() => cAsync())
.done(() => finish); // wow fast!

function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(users => users[0])
    .then(verifyUser)
    .then((user, verifiedToken) => verifiedToken)
    .catch(err => log(err.stack));
}
