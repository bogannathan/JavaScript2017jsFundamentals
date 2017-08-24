// 


function init() {
    var name = "nathan"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();

//closures maintain a reference to their environment even though they are "closed" this allows functions within a function to return values by reverse inception 