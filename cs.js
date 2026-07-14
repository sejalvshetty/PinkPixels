// Save selected semester

const semesterSelect = document.getElementById("semesterSelect");
loadSemesterSubjects();

semesterSelect.value =
localStorage.getItem("selectedSemester") || "1";

semesterSelect.addEventListener("change",()=>{

    localStorage.setItem(
        "selectedSemester",
        semesterSelect.value
    );

    loadSemesterSubjects();

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

function loadSemesterSubjects(){

    const semester = semesterSelect.value;

    document.querySelectorAll(".editable").forEach((element,index)=>{

        const key = `sem${semester}_sub${index+1}`;

        const saved = localStorage.getItem(key);

        if(saved){

            element.innerHTML = saved;

        }

    });

}

function saveSemesterSubjects(){

    const semester = semesterSelect.value;

    document.querySelectorAll(".editable").forEach((element,index)=>{

        const key = `sem${semester}_sub${index+1}`;

        localStorage.setItem(key,element.innerHTML);

    });

}
