/**
 * WEN Lab Homepage Slideshow - SIMPLE TEST
 */

console.log('=== SLIDESHOW SCRIPT LOADED ===');

// Test if script is running
alert('Slideshow script is loaded!');

document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM CONTENT LOADED ===');
  alert('DOM Content Loaded!');
  
  // Find the hero section
  const heroSection = document.querySelector('#section-hero');
  console.log('Hero section:', heroSection);
  
  if (heroSection) {
    alert('Found hero section!');
    
    // Find the background element
    const bgElement = heroSection.querySelector('.home-section-bg');
    console.log('Background element:', bgElement);
    
    if (bgElement) {
      alert('Found background element!');
      
      // Test: Try to change the background immediately
      console.log('Testing background change...');
      bgElement.style.backgroundImage = "url('/media/h2.jpg')";
      bgElement.style.filter = 'brightness(0.7)';
      alert('Changed background to h2.jpg!');
      
      console.log('New background style:', bgElement.style.backgroundImage);
    } else {
      alert('Background element not found!');
    }
  } else {
    alert('Hero section not found!');
  }
}); 