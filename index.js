function generateRandomValues() {
  const x1 = Math.floor(Math.random() * 201) - 100;
  const x2 = Math.floor(Math.random() * 201) - 100;
  const x3 = Math.floor(Math.random() * 201) - 100;
  const y1 = Math.floor(Math.random() * 101) - 50;
  const y2 = Math.floor(Math.random() * 101) - 50;
  const y3 = Math.floor(Math.random() * 101) - 50;

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