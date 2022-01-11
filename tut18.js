console.log('More on JavaScript Events 18');

// let  btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);

// function func1(e){
//     ///console.log('Thanks', e);
//     e.preventDefault();
// }

// function func2(e){
//     console.log("Thanks  its a duble click", e);
//     e.preventDefault();
// }

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log();
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 50)`;
});