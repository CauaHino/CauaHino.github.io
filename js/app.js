/**
 * main.js
 *
 * This script waits for the entire HTML document to be loaded
 * and then adds the 'loaded' class to the body element.
 * The CSS handles the visual fade-in transition based on this class.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Select the <body> element
  const body = document.body;

  // Add the 'loaded' class to trigger the CSS transition (fade-in)
  body.classList.add('loaded');

  // Console log (optional, useful for debugging)
  console.log("Portfolio loaded and fade-in animation triggered.");
});
