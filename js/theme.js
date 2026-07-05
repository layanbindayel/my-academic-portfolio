/**
 * Theme Module
 * Handles dark/light theme switching
 */

const theme = (function() {
  const root = document.getElementById('pfRoot');
  const themeBtn = document.getElementById('pfThemeBtn');
  const themeIcon = document.getElementById('pfThemeIcon');

  function toggle() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    updateIcon(isDark);
    refreshNetworkColors();
  }

  function updateIcon(isDark) {
    themeIcon.className = 'ti ' + (isDark ? 'ti-sun' : 'ti-moon');
  }

  function refreshNetworkColors() {
    // Called by neural-network.js
    if (window.neuralNetwork && window.neuralNetwork.updateColors) {
      window.neuralNetwork.updateColors();
    }
  }

  // Event listener
  if (themeBtn) {
    themeBtn.addEventListener('click', toggle);
  }

  return { toggle };
})();