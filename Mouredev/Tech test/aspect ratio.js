// Caltulate aspect ratio for a given image

const image = new Image();

image.src = 'https://raw.githubusercontent.com/mouredev/retos-programacion-2023/main/Images/header.jpg';
image.onload = function() {
  console.log(image.width)
  console.log(image.height)
  console.log(aspectRatio(image.width, image.height))
}

function aspectRatio(numerator, denominator) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  let divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

// working