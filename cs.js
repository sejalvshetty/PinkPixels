// ELEMENTS

const semesterSelect = document.getElementById("semesterSelect");
const subjectCards = document.querySelectorAll(".subject-card");
const editableSubjects = document.querySelectorAll(".subject-card .editable");

// LOAD SAVED SEM

semesterSelect.value =
    localStorage.getItem("selectedSemester")  || "1";

//DEFAULT SUBJECTS

const defaultSubjects = {
    1: [
        "Python",
        "Computer Fundamentals",
        "WebTech",
        "Linux",
        "EVS",
        "Business Communication",
        "OE A",
        "OE B"
    ],

    2: [
        "DAA",
        "DBMS",
        "Maths",
        "Applied Python, R",
        "EVS",
        "Business Communication",
        "OE A",
        "OE B"
    ],

    3: [
        "Subject 1",
        "Subject 2",
        "Subject",
        "Subject 3",
        "Subject 4",
        "Subject 5",
        "Subject 6",
        "Subject 7",
        "Subject 8",
    ],

    4: [
        "Subject 1",
        "Subject 2",
        "Subject",
        "Subject 3",
        "Subject 4",
        "Subject 5",
        "Subject 6",
        "Subject 7",
        "Subject 8",
    ],

    5: [
        "Subject 1",
        "Subject 2",
        "Subject",
        "Subject 3",
        "Subject 4",
        "Subject 5",
        "Subject 6",
        "Subject 7",
        "Subject 8",
    ],

    6: [
        "Subject 1",
        "Subject 2",
        "Subject",
        "Subject 3",
        "Subject 4",
        "Subject 5",
        "Subject 6",
        "Subject 7",
        "Subject 8",

// LOAD SUBJECTS

function loadSemesterSubjects(){
    const sem = semesterSelect.value;
    editableSubjects.forEach((subject,index)=>{
        const key = `sem${sem}_sub${index}`;
        const saved = localStorage.getItem(key);
        if(saved){
            subject.innerHTML = saved;
        }
        else{
            subject.innerHTML = defaultSubjects[sem][index];
        }
    });
}


// SAVE SUBJECTS

function saveSemesterSubjects(){
    const sem = semesterSelect.value;
    editableSubjects.forEach((subject,index)=>{
        const key = `sem${sem}_sub${index}`;
        localStorage.setItem(
            key,
            subject.innerHTML
        );
    });
}

/* make function available to editable.js*/

window.saveSemesterSubjects = saveSemesterSubjects;

// CHANGE SEM

semesterSelect.addEventListener("change",()=>{
    localStorage.setItem(
        "selectedSemester",
        semesterSelect.value
    );
    loadSemesterSubjects();
});

// OPEN MONTH PG

subjectCards.forEach(card=>{
    card.addEventListener("click",(e)=>{
        if(editBtn.textContent==="Save"){
            return;
        }
        const subject =
        card.querySelector(".editable").textContent.trim();
        localStorage.setItem(
            "currentSemester",
            semesterSelect.value
        );
        localStorage.setItem(
            "currentSubject",
            subject
        );
        window.location.href="months.html";
    });
});


// INITIAL LOAD

loadSemesterSubjects();






        
