// Access to the display
const display = document.getElementById("show");


// Access to the comment box
const cBox = document.getElementById("comment");


// Array of all buttons
const buttons = document.querySelectorAll(".cmnt");



const comments = [
    "Clears the display",
    "Deletes the last element",
    "Gives the remainder after division operation",
    "Gives the result of division operation",
    "Number: 7",
    "Number: 8",
    "Number: 9",
    "Gives the result of multiplication operation",
    "Number: 4",
    "Number: 5",
    "Number: 6",
    "Gives the result of subtraction operation",
    "Number: 1",
    "Number: 2",
    "Number: 3",
    "Gives the result of addition operation",
    "Number: 0",
    "Decimal-point",
    "Calculates the expression on the screen"
];


window.onload = clearDisplay();


buttons.forEach(btn => {
    btn.addEventListener("mouseenter", function() {
        let idx = this.getAttribute("data-comment-index");
        showComment(comments[idx]);
    });

    btn.addEventListener("mouseleave", function() {
        hideComment();
    });
});


function pushToDisplay(ip) {
    display.value = display.value === "0" ? ip : display.value + ip;
}

function popFromDisplay() {
    display.value = display.value.length === 1 ? "0" : display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = "Error!";
    }
}

function showComment(comment, butt) {
    cBox.innerText = comment;
    cBox.style.display = "block";
}

function hideComment() {
    cBox.style.display = "none";
}