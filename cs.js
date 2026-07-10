// Save selected semester

const semesterSelect = document.getElementById("semesterSelect");

semesterSelect.value =
localStorage.getItem("selectedSemester") || "1";

semesterSelect.addEventListener("change",()=>{

    localStorage.setItem(
        "selectedSemester",
        semesterSelect.value
    );

});

// Subject click

document.querySelectorAll(".subject-card").forEach(card => {

   card.addEventListener("click", (e) => {

    if (document.getElementById("editBtn").textContent.trim() === "Save") {
        return;
    }

    const semester = semesterSelect.value;

    const subject = card.querySelector(".editable").textContent.trim();

    localStorage.setItem("currentSemester", semester);
    localStorage.setItem("currentSubject", subject);

    window.location.href = "months.html";
});

});