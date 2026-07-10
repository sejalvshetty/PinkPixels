// ===============================
// DATE
// ===============================

const today = new Date();

const dateElement = document.getElementById("currentDate");

if (dateElement) {

    dateElement.textContent = today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

// ===============================
// YEAR GOALS
// ===============================

const goalYear = document.getElementById("goalYear");

if (goalYear) {

    goalYear.textContent = `${today.getFullYear()} Goals`;

}

// ===============================
// CURRENT MONTH
// ===============================

const currentMonth = document.getElementById("currentMonth");

if (currentMonth) {

    currentMonth.textContent = today.toLocaleString("en-US", {
        month: "long"
    }).toUpperCase();

}

// ===============================
// ANALOG CLOCK
// ===============================

const clock = document.getElementById("analogClock");

if (clock) {

    // Create Numbers

    for (let i = 1; i <= 12; i++) {

        const number = document.createElement("div");

        number.className = "number";
        number.textContent = i;

        const angle = (i - 3) * 30 * Math.PI / 180;

        const radius = 130;

        number.style.left = `${170 + radius * Math.cos(angle)}px`;
        number.style.top = `${170 + radius * Math.sin(angle)}px`;

        clock.appendChild(number);

    }

    // Create Hands

    const hourHand = document.createElement("div");
    hourHand.id = "hour";
    hourHand.className = "hand";

    const minuteHand = document.createElement("div");
    minuteHand.id = "minute";
    minuteHand.className = "hand";

    const secondHand = document.createElement("div");
    secondHand.id = "second";
    secondHand.className = "hand";

    clock.appendChild(hourHand);
    clock.appendChild(minuteHand);
    clock.appendChild(secondHand);

    // Update Clock

    function updateClock() {

        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;

        const secondDeg = seconds * 6;
        const minuteDeg = minutes * 6;
        const hourDeg = (hours * 30) + (minutes * 0.5);

        hourHand.style.transform =
            `translateX(-50%) rotate(${hourDeg}deg)`;

        minuteHand.style.transform =
            `translateX(-50%) rotate(${minuteDeg}deg)`;

        secondHand.style.transform =
            `translateX(-50%) rotate(${secondDeg}deg)`;

    }

    updateClock();

    setInterval(updateClock, 1000);

}