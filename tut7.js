console.log("Arrays and Objects In JavaScript | JavaScript Tutorial In Hindi #7");
let marks = [32, 40, 50, 62, 70]; // number  array
const fruits = ['orange', 'Apple', 'Pineapple']; // string array
const mixed = ['str', 89, [3, 5]]; // mixed array 

const arr = new Array(23,123, 21, 'orange'); // new array 
// console.log(arr);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('ddsd'));
// arr[0] = 'harry';
//console.log(arr); // ['harry', 123, 21, 'orange']

// let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

console.log(marks);
let value = marks.indexOf(73);


// marks.push(34); // add number last in array
// Mutating or Modifying arrays
// marks.unshift(55); // add number fist in array
// marks.pop(); // remove last element of array 
// marks.shift(); // remove fist element of array
// marks.splice(0, 3); // remove 0 index to 3 index's elements 32, 40, 50. (start to end elements remove)
// marks.reverse(); change order reverse z to a  
console.log(marks);

let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2); // .concat() combine marks + marks2 two arrays
// console.log(marks);

let myobj = {
    name : 'Ramesh',
    channel: 'CodeWidthRamesh',
    isActive:true,
    marks:[1, 3, 5, 6]
}

console.log(myobj);
// console.log(myobj.channel); // first way and 
console.log(myobj['channel']); // second way


