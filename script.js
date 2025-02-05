const addButton = document.getElementById("add-button");

addButton.addEventListener("click", (event) => {
  const noteText = document.getElementById("text").value;
  if (noteText) {
    const newNote = document.createElement("div");
    newNote.classList.add("finalNote");

    const para = document.createElement("p");
    para.textContent = noteText;
    newNote.appendChild(para);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    newNote.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      notes.removeChild(newNote);
    });

    const notes = document.getElementById("notes");
    notes.appendChild(newNote);

    document.getElementById("text").value = "";
  }
});
