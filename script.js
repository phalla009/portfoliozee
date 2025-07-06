// Typing Animation
const typingSpan = document.querySelector(".typing-text span");
const phrases = [
  "Web Developerr",
  "Software Developerr",
  "Networkingg",
  "Programmerr",
  "Graphic Designerr",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function type() {
  typingSpan.textContent = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
