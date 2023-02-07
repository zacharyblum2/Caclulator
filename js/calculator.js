// Create Add, Subtact, Multiply, and Divide functions.
const add = function(n1, n2) {
    return n1 + n2;
}

const subtract = function(n1, n2) {
    return n1 - n2;
}

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1 / n2;
}

// Create function operate: Takes operator, and 2 numbers and calls one of the above functions.
const operate = function(op, n1, n2) {
    if (op == "+")
        return add(n1, n2);
    else if (op == "-")
        return subtract(n1, n2);
    else if (op == "*")
        return multiply(n1, n2);
    else if (op == "/")
        return divide(n1, n2);
    else
        console.log("Please enter a valid operator as the first parameter!");
}

function clear() {
    console.log("called");
    let display = document.getElementById("current");
    display.innerHTML = '';

    display = document.getElementById("past");
    display.innerHTML = "";

    console.log("done");
}

// When button clicked, take that number and add it to display.
function input(num) {
    let display = document.getElementById("current");
    display.innerHTML = num;
}

