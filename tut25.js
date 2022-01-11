console.log("Creating an Editable Div Exercise 2_ Solution");


/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement("div");

// Add text to that created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element. click to edit it");
} else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);


// Give element id, style and class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "width:300px; border:3px solid green; margin:30px 0px; padding:20px;"
);

// Grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

// Insert the element before element with id first
container.insertBefore(divElem, first);
console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;
  }

  // listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem('text', textarea.value);
  });
});
