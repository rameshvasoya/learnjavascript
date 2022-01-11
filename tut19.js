console.log("Smart Page Crawler 19");

// open https://codewithharry.com/ and execute code in  console

let str = "react";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  //console.log(href);
  if(href.includes(str)) {
    console.log(href);
  }
});


