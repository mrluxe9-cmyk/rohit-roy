/* =====================================================================
   MR LUXE — main.js
   Mobile navigation: toggleMenu() toggles the "active" class on
   #navLinks. This is the exact contract style.css's mobile dropdown
   rules (@media max-width: 991.98px) are built against — no HTML
   changes were needed to keep it working.

   Added on top of the original open/close toggle (still required by
   onclick="toggleMenu()" in the HTML):
   - Close the dropdown when a nav link is tapped (a small dropdown,
     unlike a full-screen panel, should get out of the way once a
     link is chosen).
   - Close the dropdown on outside click/tap.
   - Close the dropdown with the Escape key (accessibility).
   These additions never touch HTML/classes beyond "active", so the
   CSS contract is unchanged.
   ===================================================================== */

const navLinks = document.getElementById('navLinks');
const menuBtn = document.querySelector('.menu-btn');

/* Required by the existing HTML: onclick="toggleMenu()" */
function toggleMenu() {
  navLinks.classList.toggle('active');
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active') ? 'true' : 'false');
  }
}

/* Close when a nav link is clicked (dropdown UX, not full-screen) */
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

/* Close when tapping/clicking outside the menu or hamburger */
document.addEventListener('click', function (event) {
  const isOpen = navLinks.classList.contains('active');
  const clickedInsideMenu = navLinks.contains(event.target);
  const clickedHamburger = menuBtn && menuBtn.contains(event.target);

  if (isOpen && !clickedInsideMenu && !clickedHamburger) {
    navLinks.classList.remove('active');
  }
});

/* Close on Escape for keyboard users */
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

/* =====================================================================
   GA4 EVENT TRACKING
   Sends events through the existing gtag.js loaded in <head>. All calls
   are guarded so the site still works if analytics is blocked or absent.
   ===================================================================== */
function sendEvent(name, params) {
  if (typeof gtag === 'function') {
    gtag('event', name, params || {});
  }
}

/* Outbound links (any link pointing off-site, e.g. WhatsApp) */
document.querySelectorAll('a[href^="http"]').forEach(function (link) {
  if (link.hostname && link.hostname !== window.location.hostname) {
    link.addEventListener('click', function () {
      sendEvent('outbound_click', {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    });
  }
});

/* Mailto / tel contact clicks */
document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(function (link) {
  link.addEventListener('click', function () {
    sendEvent('contact_click', {
      contact_type: link.href.startsWith('mailto:') ? 'email' : 'phone',
      link_text: link.textContent.trim()
    });
  });
});

/* File downloads (common document/media extensions) */
document.querySelectorAll('a[href]').forEach(function (link) {
  if (/\.(pdf|docx?|xlsx?|pptx?|zip|rar|png|jpe?g|svg|mp4)$/i.test(link.href)) {
    link.addEventListener('click', function () {
      sendEvent('file_download', {
        file_url: link.href,
        file_name: link.href.split('/').pop()
      });
    });
  }
});

/* Scroll-depth tracking: fires once per milestone per page view */
(function () {
  const milestones = [25, 50, 75, 90, 100];
  const fired = {};

  function checkScrollDepth() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    milestones.forEach(function (milestone) {
      if (percent >= milestone && !fired[milestone]) {
        fired[milestone] = true;
        sendEvent('scroll_depth', { percent_scrolled: milestone });
      }
    });
  }

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
})();
