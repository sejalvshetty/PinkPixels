// =======================================
// LOAD SUBJECT & MONTH
// =======================================

const subject =
    localStorage.getItem("currentSubject") || "Subject";

const month =
    localStorage.getItem("currentMonth") || "Month";

document.getElementById("subjectTitle").textContent = subject;
document.getElementById("monthTitle").textContent = month;


// =======================================
// STORAGE KEY
// =======================================

const semester =
    localStorage.getItem("currentSemester") || "1";

const storageKey =
`PinkPixels_${semester}_${subject}_${month}`;

let notes = JSON.parse(
    localStorage.getItem(storageKey)
);

if(!notes){

    notes = {

        topics:"",
        understood:"",
        understoodText:"",
        learn:"",
        revision:""

    };

}


// =======================================
// ELEMENTS
// =======================================

const topics =
document.getElementById("topics");

const learn =
document.getElementById("learn");

const revision =
document.getElementById("revision");

const understoodText =
document.getElementById("understoodText");

const understoodBox =
document.getElementById("understoodBox");

const saveBtn =
document.getElementById("saveBtn");

const radios =
document.querySelectorAll("input[name='understood']");


// =======================================
// LOAD DATA
// =======================================

topics.value = notes.topics;

learn.value = notes.learn;

revision.value = notes.revision;

understoodText.value =
notes.understoodText;


if(notes.understood==="yes"){

    document.querySelector(
    "input[value='yes']"
    ).checked=true;

    understoodBox.style.display="block";

}

if(notes.understood==="no"){

    document.querySelector(
    "input[value='no']"
    ).checked=true;

    understoodBox.style.display="none";

}


// =======================================
// SHOW / HIDE
// =======================================

radios.forEach(radio=>{

radio.addEventListener("change",()=>{

if(radio.value==="yes"){

understoodBox.style.display="block";

}

else{

understoodBox.style.display="none";

}

});

});


// =======================================
// SAVE
// =======================================

saveBtn.addEventListener("click",()=>{

notes.topics =
topics.value;

notes.learn =
learn.value;

notes.revision =
revision.value;

notes.understoodText =
understoodText.value;

const selected =
document.querySelector(
"input[name='understood']:checked"
);

notes.understood =
selected ?
selected.value :
"";

localStorage.setItem(

storageKey,

JSON.stringify(notes)

);

saveBtn.textContent="Saved ✓";

setTimeout(()=>{

saveBtn.textContent="Save";

},1500);

});