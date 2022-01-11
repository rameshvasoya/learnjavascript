console.log('24 Date Object_ Date & Time');
// console.log(today);
let today = new Date();
let otherDate = new Date('8-4-2003 04:54:08');
//let otherDate = new Date('June 13 1976');
//let otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
//console.log(a);

otherDate.setDate(24);
otherDate.setMonth(0);
otherDate.setFullYear(0);
otherDate.setSeconds(1);
otherDate.setMinutes(1);
otherDate.setHours(1);

console.log(otherDate);