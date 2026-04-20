// Tailwind Config
tailwind.config = { content: [] }

// Typing Animation
const texts = ["Wir fahren zusammen.", "Wir fallen zusammen.", "93X FOREVER."];
let count = 0, index = 0, currentText = '', direction = 1;
const typingElement = document.getElementById('typing');

function type() {
  currentText = texts[count];
  typingElement.textContent = currentText.slice(0, index);
  
  if (direction === 1) {
    index++;
    if (index > currentText.length) {
      direction = -1;
      setTimeout(type, 1200);
      return;
    }
  } else {
    index--;
    if (index === 0) {
      direction = 1;
      count = (count + 1) % texts.length;
    }
  }
  setTimeout(type, 70);
}
type();

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Smooth Scroll für Sidebar-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
