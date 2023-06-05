const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities = giftsCities.sort((a, b) => b - a)
  console.log(giftsCities)
  let count = 0
  let city = 0  

  for (let i = 0; i < giftsCities.length; i++) {
    const num = giftsCities[i]

    if (count + num <= maxGifts && city <= maxCities) {
      count += num
      city += 1
    }
  }
  return count
}

//console.log(getMaxGifts(giftsCities, maxGifts, maxCities))

// chat gpt solve
function getMaxGiftsGPT(giftsCities, maxGifts, maxCities) {
  // Ordenar las ciudades en orden descendente por el número de regalos
  giftsCities.sort((a, b) => b - a);

  // Variables para almacenar el conteo de regalos y ciudades visitadas
  let totalGifts = 0;
  let visitedCities = 0;

  // Iterar sobre las ciudades y sumar los regalos mientras se cumplan las condiciones
  for (let i = 0; i < giftsCities.length; i++) {
    if (visitedCities === maxCities || totalGifts + giftsCities[i] > maxGifts) {
      // Si ya se visitaron todas las ciudades permitidas o se excede el límite de regalos, salir del bucle
      break;
    }

    // Sumar los regalos de la ciudad actual
    totalGifts += giftsCities[i];

    // Incrementar el contador de ciudades visitadas
    visitedCities++;
  }

  return totalGifts;
}

const maxGiftsSum = getMaxGiftsGPT(giftsCities, maxGifts, maxCities);
//console.log(maxGiftsSum); // output: 20

