/**
 * Force Light Theme Script
 * This script ensures the website always displays in light mode
 * regardless of user preferences or other scripts
 */

(function() {
  'use strict';
  
  let themeApplied = false;
  let intervalId = null;
  
  // Function to force light theme
  function forceLightTheme() {
    // Only apply if not already applied
    if (themeApplied && document.documentElement.getAttribute('data-bs-theme') === 'light') {
      return;
    }
    
    // Set data attribute to light
    document.documentElement.setAttribute('data-bs-theme', 'light');
    
    // Remove any dark theme classes
    document.documentElement.classList.remove('dark', 'theme-dark', 'theme-auto');
    document.body.classList.remove('dark', 'theme-dark', 'theme-auto');
    
    // Force light theme CSS variables
    const lightThemeVars = {
      '--bs-body-bg': '#ffffff',
      '--bs-body-color': '#2c3e50',
      '--bs-secondary-color': '#555',
      '--bs-tertiary-bg': '#f8f9fa',
      '--bs-border-color': '#dee2e6',
      '--bs-link-color': '#0d6efd',
      '--bs-link-hover-color': '#0a58ca',
      '--bs-heading-color': '#2c3e50',
      '--bs-text-muted': '#6c757d',
      '--bs-card-bg': '#ffffff',
      '--bs-navbar-bg': '#ffffff',
      '--bs-navbar-color': '#2c3e50',
      '--bs-navbar-brand-color': '#2c3e50',
      '--bs-navbar-link-color': '#2c3e50',
      '--bs-navbar-link-hover-color': '#0d6efd'
    };
    
    // Apply CSS variables
    Object.entries(lightThemeVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
    
    // Set direct styles
    document.documentElement.style.backgroundColor = '#ffffff';
    document.documentElement.style.color = '#2c3e50';
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#2c3e50';
    
    themeApplied = true;
  }
  
  // Apply immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceLightTheme);
  } else {
    forceLightTheme();
  }
  
  // Re-apply less frequently to prevent performance issues
  intervalId = setInterval(forceLightTheme, 5000); // Changed from 500ms to 5000ms
  
  // Apply on various events that might trigger theme changes
  window.addEventListener('load', forceLightTheme);
  window.addEventListener('focus', forceLightTheme);
  
  // Override any theme switching functions
  if (window.themeSwitcher) {
    window.themeSwitcher = function() {
      forceLightTheme();
      return false;
    };
  }
  
  // Monitor for theme changes and override them (less aggressive)
  const observer = new MutationObserver(function(mutations) {
    let shouldForce = false;
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && 
          (mutation.attributeName === 'data-bs-theme' || 
           mutation.attributeName === 'class')) {
        shouldForce = true;
      }
    });
    if (shouldForce) {
      // Debounce the theme forcing
      clearTimeout(window.themeForceTimeout);
      window.themeForceTimeout = setTimeout(forceLightTheme, 100);
    }
  });
  
  // Start observing
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bs-theme', 'class']
  });
  
  // Cleanup function
  window.addEventListener('beforeunload', function() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    if (observer) {
      observer.disconnect();
    }
  });
  
  console.log('Light theme enforcement script loaded');
})(); 