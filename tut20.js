console.log(" Local & Session storage 19");
let impArray = ['Adrak', 'Pyaz', 'Bhaindi'];

//add key value in local storage 
localStorage.setItem('name1', 'Ramesh');
localStorage.setItem('name2', 'Suresh');
localStorage.setItem('Subzi', JSON.stringify(impArray));

// clear local storage 
// localStorage.clear;

// clear a particular key-value pair
// localStorage.removeItem('name2');

// get item from local storage 
let Dname = localStorage.getItem('name2');
Dname = JSON.parse(localStorage.getItem('Subzi'));

console.log(Dname);


// sessionStorage.setItem('sessionname1', 'sRamesh');
// sessionStorage.setItem('sessionname2', 'sSuresh');
// sessionStorage.setItem('sessionSubzi', JSON.stringify(impArray));


