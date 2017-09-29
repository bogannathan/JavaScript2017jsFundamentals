//Wrap a given element in a new container element using plain JavaScript:

// element that will be wrapped
var el = document.querySelector('div.wrap_me');

// create wrapper container
var wrapper = document.createElement('div');

// insert wrapper before el in the DOM tree
el.parentNode.insertBefore(wrapper, el);

// move el into wrapper
wrapper.appendChild(el);

//The same procedure in form of a helper function:


function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

// example: wrapping an anchor with class "wrap_me" into a new div element
wrap(document.querySelector('a.wrap_me'), document.createElement('div'));