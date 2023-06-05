// Caltulate aspect ratio for a given image
function aspectRatio(numerator, denominator) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  let divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

const container = document.querySelector('.container');
const image = new Image();

image.src = 'https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/211729758_10157883688901669_6968332867050654233_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFRjW5cugTqtFZUSlOni2brJ_kXs0NElmon-RezQ0SWaksK8n1TUBMu3g78_mLwEH5WZ8rlxJtXLOER-44LjTMK&_nc_ohc=Dg4Yq_u9hVQAX8davgl&_nc_ht=scontent.fmex16-1.fna&oh=00_AfA-eWBS9np2iykHSkBekxiwxuw6XkOI-RkYfrsVUBf2ow&oe=63E09CCD';
image.onload = function() {
  console.log(image.width)
  console.log(image.height)
  console.log(aspectRatio(image.width, image.height))

  container.appendChild(image);
  container.innerHTML += `
  <h2>Width: ${image.width}</h2>
  <h2>Height: ${image.height}</h2>
  <h2>Aspect ratio: ${aspectRatio(image.width, image.height)}
  `
}
// working