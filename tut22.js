console.log("Creating Editable Div 19");

localStorage.clear;
let addBtn =  document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.Push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    addTxt.value = "";
    console.log(notesObj);
})

