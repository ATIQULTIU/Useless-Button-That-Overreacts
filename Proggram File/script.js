const btn = document.getElementById("btn");
const msg = document.getElementById("message");

let clicks = 0;

const messages = [
  "Hey! Stop that 😠",
  "Why are you like this?",
  "Seriously… again?",
  "Do you enjoy annoying buttons?",
  "I’m judging you 👀",
  "Okay… I give up 😐"
];

btn.addEventListener("mouseenter", () => {
  if (clicks < 4) {
    btn.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  }
});

btn.addEventListener("click", () => {
  clicks++;

  msg.textContent = messages[Math.min(clicks - 1, messages.length - 1)];

  if (clicks === 3) {
    btn.classList.add("shake");
  }

  if (clicks >= 6) {
    btn.textContent = "YOU WIN 🏳️";
    btn.classList.remove("shake");
    btn.style.transform = "none";
    btn.style.background = "gray";
  }
});