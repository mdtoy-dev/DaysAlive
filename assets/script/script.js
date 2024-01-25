const submit = document.querySelector("#birthday-form");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const input = document.querySelector("#birthday");
const age = document.querySelector("#age");
const days = document.querySelector("#days");
const gridContainer = document.querySelector(".grid-container");

const now = dayjs();

submit.addEventListener("submit", function(e) {
    e.preventDefault();
    container.style.opacity = 0;
    result.style.display = "flex";
    gridContainer.style.display = "grid";
    setInterval(showResult, 1000);
    
})

function showResult() {
    result.style.opacity = 1;
    gridContainer.style.opacity = 1;
    const birthday = dayjs(input.value);
    const diff = now.diff(birthday, "year");
    age.innerHTML = diff;
    days.innerHTML = now.diff(birthday, "day");

}

function getRandomEvents(count) {
    const shuffledEvents = [...positiveEvents];

    for (let i = shuffledEvents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledEvents[i], shuffledEvents[j]] = [shuffledEvents[j], shuffledEvents[i]];
    }
    return shuffledEvents.slice(0, count);
}

function appendEventsToGrid(elementId, events) {
    const grid = document.getElementById(elementId);
    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("grid-item");
        eventDiv.innerHTML = `
        <div class="event-name">
            <h3>${event.name}</h3>
        </div>
        <div class="event-year">
            <h4>${event.year}</h4>
        </div>
        <div class="event-description">
            <p>${event.description}</p>
        </div>
        `;
        console.log(eventDiv);
        gridContainer.append(eventDiv);
    });
}

const randomEvents = getRandomEvents(8);
appendEventsToGrid("gridContainer", randomEvents);