tailwind.config = { content: [] }

// Typing Effect
const texts = ["Wir fahren zusammen.", "Wir fallen zusammen.", "93X FOREVER."];
let count = 0, index = 0, direction = 1;
const typingElement = document.getElementById('typing');

function type() {
  const currentText = texts[count];
  typingElement.textContent = currentText.slice(0, index);
  
  if (direction === 1) {
    index++;
    if (index > currentText.length) { direction = -1; setTimeout(type, 1500); return; }
  } else {
    index--;
    if (index === 0) { direction = 1; count = (count + 1) % texts.length; }
  }
  setTimeout(type, 65);
}
type();

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll, .crew-card').forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
