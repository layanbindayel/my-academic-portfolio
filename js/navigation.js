/**
 * Navigation Module
 * Handles smooth scrolling and menu interactions
 */

const navigation = (function() {
  const root = document.getElementById('pfRoot');
  const langBtn = document.getElementById('pfLangBtn');
  const menuBtn = document.querySelector('[onclick="pfToggleMenu()"]');
  const menuPanel = document.getElementById('pfMenuPanel');
  const logo = document.querySelector('.pf-logo');

  function renderNavigation() {
    const navHtml = `
      <button class="pf-logo" onclick="navigation.scroll('pf-home')">Layan Bin Dayel</button>
      <div class="pf-nav-right">
        <button class="pf-icon-btn pf-lang-btn" id="pfLangBtn" aria-label="Switch language" onclick="navigation.toggleLanguage()">ع</button>
        <button class="pf-icon-btn" id="pfThemeBtn" aria-label="Toggle theme" onclick="theme.toggle()"><i class="ti ti-moon" id="pfThemeIcon" aria-hidden="true"></i></button>
        <button class="pf-icon-btn" aria-label="Open menu" onclick="navigation.toggleMenu()"><i class="ti ti-menu-2" id="pfMenuIcon" aria-hidden="true"></i></button>
      </div>
    `;
    document.querySelector('.pf-nav').innerHTML = navHtml;

    const menuHtml = `
      <button class="pf-menu-link" data-i18n="nav_about" onclick="navigation.scroll('pf-about')">About</button>
      <button class="pf-menu-link" data-i18n="nav_resume" onclick="navigation.scroll('pf-resume')">Resume</button>
      <button class="pf-menu-link" data-i18n="nav_projects" onclick="navigation.scroll('pf-projects')">Projects</button>
      <button class="pf-menu-link" data-i18n="nav_courses" onclick="navigation.scroll('pf-courses')">Courses</button>
      <button class="pf-menu-link" data-i18n="nav_trophies" onclick="navigation.scroll('pf-trophies')">Trophies</button>
      <button class="pf-menu-link" data-i18n="nav_skills" onclick="navigation.scroll('pf-skills')">Skills</button>
      <button class="pf-menu-link" data-i18n="nav_contact" onclick="navigation.scroll('pf-contact')">Contact</button>
    `;
    menuPanel.innerHTML = menuHtml;
  }

  function scroll(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    menuPanel.classList.remove('open');
  }

  function toggleMenu() {
    menuPanel.classList.toggle('open');
  }

  function toggleLanguage() {
    const newLang = i18n.toggle();
    langBtn.textContent = newLang === 'ar' ? 'EN' : 'ع';
    root.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  }

  // Public API
  window.navigation = { scroll, toggleMenu, toggleLanguage, render: renderNavigation };

  return { scroll, toggleMenu, toggleLanguage, render: renderNavigation };
})();