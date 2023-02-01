const inpChapter = document.querySelector("#favchap");
const addButton = document.querySelector("main button");
const listChapter = document.querySelector("#list");

addButton.addEventListener("click", () => {
    if (inpChapter.value == "") {
        return;
    }
    let newListItem = document.createElement("li");

    let deleteButton = document.createElement("button");

    newListItem.textContent = inpChapter.value;
    deleteButton.textContent = "❌";

    newListItem.appendChild(deleteButton);

    listChapter.appendChild(newListItem);

    deleteButton.addEventListener("click", () => {
        newListItem.remove()
    });
    
    inpChapter.focus();

    inpChapter.value="";

});
