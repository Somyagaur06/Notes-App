displayNotes();

// If user adds a  new note, add it to  localStorage

// getting the add button reference
let addBtn = document.getElementById("addBtn");

//Listening to click event on Add button
addBtn.addEventListener("click", function (e) {
  let addNewTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  console.log(addNewTxt);

  if (notes == null)
    //Creating an new empty array to store notes if the user creates notes for first time
    myNotesObj = [];
  else myNotesObj = JSON.parse(notes);

  //Pushing new Notes to Notes Array
  myNotesObj.push(addNewTxt.value);

  //Saving notes into local storage
  localStorage.setItem("notes", JSON.stringify(myNotesObj));
  addNewTxt.value = "";

  //After adding new note calling displayNotes method to show updated data
  displayNotes();
});

// Function to show elements from localStorage
function displayNotes() {
  //Getting notes from local storage
  let notes = localStorage.getItem("notes");

  if (notes == null)
    // Array to store all the notes from local storage
    myNotes = [];
  else myNotes = JSON.parse(notes);

  let html = "";

  myNotes.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card"
  		style="width: 18rem;">
  			<div class="card-body">
  				<h5 class="card-title">
  					Note ${index + 1}
  				</h5>
  				<p class="card-text">
  					${element}
  				</p>

  			<button id="${index}" onclick=
  				"deleteNote(this.id)"
  				class="btn btn-primary">
  				Delete Note
  			</button>
  		</div>
  	</div>`;
  });

  let notesElement = document.getElementById("notes");
  console.log(notesElement);
  if (myNotes.length != 0) notesElement.innerHTML = html;
  else
    notesElement.innerHTML = `No note is added.Create a new note by using Add New Note section above`;
}

// Function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) myNotes = [];
  else myNotes = JSON.parse(notes);

  //Remove element from Array
  myNotes.splice(index, 1);

  //Update the local storage
  localStorage.setItem("notes", JSON.stringify(myNotes));

  displayNotes();
}
