// Theme Toggle Function
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  
  // Update toggle button appearance
  updateToggleButton(savedTheme);
  
  // Add click event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Save theme preference
  localStorage.setItem('theme', newTheme);
  htmlElement.setAttribute('data-theme', newTheme);
  
  // Update toggle button
  updateToggleButton(newTheme);
}

function updateToggleButton(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    if (theme === 'dark') {
      themeToggle.innerHTML = '☀️';
      themeToggle.title = 'Switch to Light Mode';
    } else {
      themeToggle.innerHTML = '🌙';
      themeToggle.title = 'Switch to Dark Mode';
    }
  }
}

// Initialize theme toggle when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}
