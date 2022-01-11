console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard col-12 col-sm-3 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">
                  ${element}
                  </p>
                  <button id="${index}" onClick="deleteNote(this.id);" class="btn btn-primary">Delete Note</button>
                </div>
              </div>
          </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show Use "Add a Note" sextion above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  console.log("I am delete a note.");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//search Note
let search = document.getElementById("searchTxt");

search.addEventListener("input", function () {
  let inputVal = search.value;
  console.log("Input event fired!", inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function(element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
      element.style.color = "green";
      element.addElements

      element.getElementsByTagName("p")[0].classList.add("blink_me");
    } else {
      element.style.display = "none";
    }
  });
});
