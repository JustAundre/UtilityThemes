function generateRandomValues() {
  const x1 = Math.round(Math.random() * 75) - 37.5;
  const x2 = Math.round(Math.random() * 64) - 32;
  const x3 = Math.round(Math.random() * 56) - 28;
  const y1 = Math.round(Math.random() * 70) - 35;
  const y2 = Math.round(Math.random() * 57) - 28.5;
  const y3 = Math.round(Math.random() * 50) - 25;

  document.documentElement.style.setProperty('--x1', `${x1}%`);
  document.documentElement.style.setProperty('--x2', `${x2}%`);
  document.documentElement.style.setProperty('--x3', `${x3}%`);
  document.documentElement.style.setProperty('--y1', `${y1}%`);
  document.documentElement.style.setProperty('--y2', `${y2}%`);
  document.documentElement.style.setProperty('--y3', `${y3}%`);
}

// Call the function initially to set the initial values
generateRandomValues();

// Set an interval to update the values every 20 seconds
setInterval(generateRandomValues, 20000);

// Call the function to make it start moving immediately
setTimeout(generateRandomValues, 1000);