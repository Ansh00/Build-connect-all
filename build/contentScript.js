// Create a floating button and add it to the DOM
const button = document.createElement('div');
button.innerText = 'Connect with All';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#0073b1';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button.style.fontSize = '16px';

button.onclick = async () => {
  const connectButtons = document.querySelectorAll('button');
  let count = 0;

  for (let btn of connectButtons) {
    if (btn.innerText.includes('Connect')) {
      btn.click(); // Simulate a click event
      count++;
      await delay(getRandomDelay()); // Add delay between clicks
    }
  }

  alert(`${count} connection requests sent!`);
};

// Function to generate a random delay between 1 and 3 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

// Function to delay execution for a given time (in milliseconds)
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Append the button to the body
document.body.appendChild(button);
