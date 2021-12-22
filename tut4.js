// Primative data type 

//  string and string Methods
// https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
var name = "";

// Null 
let nulllVar = null;
console.log('Data type is ' + (typeof nulllVar));


// undefined 
let undef =  undefined;
console.log('Data type is ' + (typeof undef));

// Reference  Data type 

// Array 
let myArr = [1, 4, 4, 5 ];
console.log('Data type is ' + (typeof myArr));


// Object Literals
let stMarks = {
    harry : 89,
    shubham:36,
    Rohan: 98
};
console.log('Data type is ' + (typeof stMarks));

function findName() {
    
};
console.log('Data type is ' + (typeof findName));

let date = new Date();
console.log( typeof date);



function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("right", 4));





