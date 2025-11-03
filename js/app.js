document.addEventListener('DOMContentLoaded', () => {

  const textToType = 'Welcome!';
  const typingElement = document.getElementById('typing-text');
  const typingSpeed = 400;

  let charIndex = 0;

  function typeText() {
    if (charIndex < textToType.length) {
      typingElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
    // 💥 NEW CODE: When typing is finished, remove the blinking animation
    typingElement.style.animation = 'none';
    typingElement.style.borderRight = 'none'; // Optional: remove the vertical bar completely
  }
  }

  typeText();
});

