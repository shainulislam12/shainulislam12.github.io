// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle (for smaller screens)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
// Get the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for saved user preference or OS preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

// Apply initial theme
if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

// Toggle function
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update button icon and save preference
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
