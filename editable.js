const editBtn = document.getElementById("editBtn");

let editMode = false;

const editableElements = document.querySelectorAll(".editable");

editBtn.addEventListener("click", () => {

    editMode = !editMode;

    editableElements.forEach(element => {

        element.contentEditable = editMode;

    });

    if (editMode) {

        editBtn.textContent = "Save";

    } else {

        editBtn.textContent = "Edit";

        saveEditableContent();

    }

});

function saveEditableContent() {

    editableElements.forEach(element => {

        const id = element.dataset.id;

        localStorage.setItem(id, element.innerHTML);

    });

}

function loadEditableContent() {

    editableElements.forEach(element => {

        const id = element.dataset.id;

        const saved = localStorage.getItem(id);

        if (saved !== null) {

            element.innerHTML = saved;

        }

    });

}

loadEditableContent();