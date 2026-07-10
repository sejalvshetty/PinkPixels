// =========================================
// SUBJECT TITLE
// =========================================

const subjectTitle = document.getElementById("subjectTitle");

if (subjectTitle) {

    const subject =
        localStorage.getItem("currentSubject") || "Subject";

    subjectTitle.textContent = subject;

}

// =========================================
// MONTH CLICK
// =========================================

const monthCards = document.querySelectorAll(".month-card");

monthCards.forEach(card => {

    card.addEventListener("click", () => {

        const month = card.dataset.month;

        localStorage.setItem("currentMonth", month);

        window.location.href = "notes.html";

    });

});