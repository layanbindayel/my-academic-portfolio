/**
 * Main Application Entry Point
 * Initializes the portfolio with all modules
 */

(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

  function initialize() {
    // Initialize i18n
    i18n.initialize();

    // Render all content
    content.renderAll();

    // Re-initialize i18n after content render
    i18n.initialize();

    // Initialize navigation
    navigation.render();
  }
})();