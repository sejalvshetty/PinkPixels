// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const page = link.getAttribute("href").split("/").pop();

    if (page === currentPage) {
        link.classList.add("active");
    }

});

// ===============================
// LOGO ALWAYS GOES HOME
// ===============================

document.querySelector(".logo").addEventListener("click", (e) => {

    e.preventDefault();

    if (window.location.pathname.includes("/pages/")) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "index.html";
    }

});