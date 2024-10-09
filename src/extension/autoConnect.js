// Creating a floating button

const button = document.createElement('button');

// Button properties 
button.textContent = 'Connect with All';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.padding = '10px';
button.style.backgroundColor = '#0077b5'; // LinkedIn's blue color
button.style.color = '#ffffff'; 
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.zIndex = '9999'; // The button remains at top over other elemnents 

// Append the button to the bottom right
document.body.appendChild(button);

// Add the function
button.addEventListener('click', () => {
  const connectButtons = document.querySelectorAll('button[data-control-name="people_connect"]');
  let count = 0;

  // Function to click each connect button with a delay
  const clickConnectButtons = (index) => {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      count++;
      console.log(`Sent ${count} connection request(s)`);

      // Delay between clicks (1 to 3 seconds)
      setTimeout(() => clickConnectButtons(index + 1), Math.random() * 2000 + 1000);
    } else {
      alert('All connection requests have been sent!');
    }
  };

  // Start clicking
  clickConnectButtons(0);
});
