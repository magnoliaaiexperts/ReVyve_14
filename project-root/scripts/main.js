// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', (!isExpanded).toString());
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileMenuButton.setAttribute('aria-expanded', 'false');
}

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
}

// Modal functionality (if modals are used)
let previouslyFocused;
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  previouslyFocused = document.activeElement;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  const focusables = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusables.length) focusables[0].focus();
  const trigger = document.querySelector(`[aria-controls="${modalId}"]`);
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  const trigger = document.querySelector(`[aria-controls="${modalId}"]`);
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
  if (previouslyFocused) previouslyFocused.focus();
}

window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    if (e.target === modal) closeModal(modal.id);
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      if (modal.style.display === 'flex') closeModal(modal.id);
    });
  }
});

document.querySelectorAll('.modal-card[role="button"]').forEach(card => {
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic year in footer
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
