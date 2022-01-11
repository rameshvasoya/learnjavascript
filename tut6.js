console.log("Strings_ Properties, Methods & Template Literals in JavaScript _ JavaScript Tutorial In Hindi #6");
const frName = 'Ramesh';
const greeting = 'Good morning';
console.log(greeting + ' ' + frName);

let html;
html = "<h1> this is heading </h1>"+
        "<p> this is my paragraph</p>";

html = html.concat();
console.log(html);

console.log(html.indexOf('<')); // index of < char
console.log(html.lastIndexOf('<')); //index of last char <
console.log(html.charAt(3)); // display index no 3 char >
console.log(html.endsWith('dddd')); // ddddd not found in string so false
console.log(html.includes('dd')); // dd not found in string so false 
console.log(html.substring(1,6)); //1 to 6 char display  h1> t
console.log(html.slice(0,4)); //1 to 6 char display <h1>
console.log(html.split(' ')); // convert paragraph to string 

console.log(html.replace('this','it')); // repace this to it word in paragraph  and it is  replace only first word


// practice 
const school1 = "Hiraman";
const school2 = "Applo";
const lanHtml = `my favarite school is an ${school2}`;
document.body.innerHTML = lanHtml;



