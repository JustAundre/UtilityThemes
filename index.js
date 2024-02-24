// Autoplay the background
document.getElementById('background').play();

function setRandomHue() {
    // Generate random number between 0 and 360
    const randomAngle = Math.floor(Math.random() * 361);
  
    // Append "deg" and create CSS variable string
    const hueValue = `${randomAngle}deg`;
  
    // Set the CSS variable "--hue"
    document.documentElement.style.setProperty('--hue', hueValue);
  }
  
// Call the function initially to set the variable
setRandomHue();

// Repeat the function every 10 seconds
setInterval(setRandomHue, 10000);