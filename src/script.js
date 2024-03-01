document.addEventListener("DOMContentLoaded", function () {
  var isRight = false;
  var leftColor = '#0AE7A8';
  var rightColor = '#B9EC0F';
  // Function to generate next color gradient
  function generateRandomGradient() {
    if (isRight) {
        leftColor = getRandomColor();
    } else {
        rightColor = getRandomColor();
    }
    
    return `linear-gradient(to right, ${leftColor} 30%, ${rightColor} 70%)`;
  }

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to update text color with a gradient effect
  function updateTextGradient() {
    const colorfulText = document.getElementById('colorful-text');
    const gradient = generateRandomGradient();
    console.log(gradient);
    
    colorfulText.style.backgroundImage = gradient;
    //colorfulText.transition = "all 1s ease-in-out";
    if (isRight) {
        colorfulText.style.backgroundPosition = "top left";
    } else {
        colorfulText.style.backgroundPosition = "top left 100%";
    }
    isRight = !isRight
  }

  // Initial call to start the color fading process
  updateTextGradient();

  // Repeat the update every 2 seconds
  setInterval(updateTextGradient, 3500);
});