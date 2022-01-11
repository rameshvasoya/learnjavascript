console.log("Events & Event Object Hindi #17"); 
document.getElementById('heading').addEventListener('click', function(e){
    console.log('You have clicked  the header.');
    console.log(e);
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = array.from(e.target.classList);
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetX;
    variable = e.clientX;
    variable = e.clientY;

    console.log(variable);
})