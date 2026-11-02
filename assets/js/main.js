/**
 * Skilqu Landing Page Scripts (Skillshare-Inspired)
 * Course Filter Tags, Accordion FAQ, Mobile Sticky Bar, Form Redirection to CTA (s.id/LEICk)
 */

document.addEventListener('DOMContentLoaded', () => {
  const CTA_URL = 'https://s.id/LEICk';

  // 1. Course Catalog Filter Pills (Skillshare Style)
  const filterPills = document.querySelectorAll('.pill-tag-btn');
  const courseCards = document.querySelectorAll('.course-item-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Form Track Pills Selection
  const trackLabels = document.querySelectorAll('.track-pill-option');
  const trackRadios = document.querySelectorAll('input[name="track"]');

  function syncTrackSelection() {
    trackLabels.forEach(label => {
      const radio = label.querySelector('input[type="radio"]');
      if (radio && radio.checked) {
        label.classList.add('selected');
      } else {
        label.classList.remove('selected');
      }
    });
  }

  trackRadios.forEach(radio => {
    radio.addEventListener('change', syncTrackSelection);
  });
  syncTrackSelection();

  // 3. Minimalist Skillshare FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-skillshare-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-skillshare-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other items for sleek minimalist behavior
      faqItems.forEach(other => {
        other.classList.remove('active');
        const icon = other.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('active');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 4. Mobile Sticky Bottom Bar Scroll Trigger
  const mobileBar = document.getElementById('mobile-sticky-cta');
  const heroSection = document.getElementById('hero');

  if (mobileBar && heroSection) {
    window.addEventListener('scroll', () => {
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom < 60) {
        mobileBar.classList.add('visible');
      } else {
        mobileBar.classList.remove('visible');
      }
    }, { passive: true });
  }

  // 5. Lead Form Submission Handler (Directs to bit.ly/4zmKW3R)
  const leadForm = document.getElementById('lead-capture-form');
  const successBox = document.getElementById('form-success-box');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('user-name').value.trim();
      const emailVal = document.getElementById('user-email').value.trim();
      const trackVal = document.querySelector('input[name="track"]:checked').value;

      if (!nameVal || !emailVal) {
        alert('Mohon lengkapi nama dan alamat email aktif kamu.');
        return;
      }

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Menyiapkan Starter Kit...</span>`;

      // Save lead locally
      const lead = { name: nameVal, email: emailVal, track: trackVal, time: new Date().toISOString() };
      localStorage.setItem('skilqu_lead', JSON.stringify(lead));

      setTimeout(() => {
        leadForm.style.display = 'none';
        if (successBox) {
          successBox.style.display = 'block';
          const info = successBox.querySelector('.success-meta-info');
          if (info) {
            info.textContent = `Akses modul video 15 menit dan file latihan ${trackVal.toUpperCase()} telah disiapkan untuk ${nameVal} (${emailVal}).`;
          }
        }
        // Redirect/open Google Form questionnaire
        window.open(CTA_URL, '_blank');
      }, 500);
    });
  }

  // 6. Search Bar Enter Action
  const searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const catalogSec = document.getElementById('katalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
});
