// Page load animation log
window.addEventListener("load", () => {
    console.log("Zomato UI Loaded 🚀");
});

// Typing effect for placeholder
const input = document.querySelector("input");

const places = [
    "Tokyo, Shibuya...",
    "Osaka, Namba...",
    "Kyoto, Gion...",
    "Matsudo,Shimmatsudo"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function typingEffect() {
    current = places[i];

    if (deleting) {
        input.setAttribute("placeholder", current.substring(0, j--));
    } else {
        input.setAttribute("placeholder", current.substring(0, j++));
    }

    if (!deleting && j === current.length) {
        deleting = true;
        setTimeout(typingEffect, 1000);
        return;
    }

    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % places.length;
    }

    setTimeout(typingEffect, deleting ? 50 : 100);
}

typingEffect();


// Input enter search
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (input.value.trim() === "") {
            alert("Please enter an address!");
        } else {
            alert("Searching for: " + input.value);
        }
    }
});


// Smooth hover animation for nav links
const links = document.querySelectorAll("header ul li a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});