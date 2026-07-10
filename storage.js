// ===============================
// CHECKBOX STORAGE
// ===============================

const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((checkbox) => {

    const key = checkbox.dataset.id;

    if (!key) return;

    const saved = localStorage.getItem(key);

    if (saved !== null) {
        checkbox.checked = JSON.parse(saved);
    }

    checkbox.addEventListener("change", () => {
        localStorage.setItem(key, checkbox.checked);
    });

});