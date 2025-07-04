document.addEventListener("DOMContentLoaded", function () {
  var typingText = document.querySelector(".typing-text span");
  var text = "Developer"; // Replace this with the desired text
  var i = 0;

  function typeText() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 100); // Adjust speed here
    }
  }

  typeText(); // Start typing on page load
});
