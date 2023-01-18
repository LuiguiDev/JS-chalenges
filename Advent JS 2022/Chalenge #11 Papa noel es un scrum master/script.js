"use strict"
function getCompleted(part, total) {
  const conversion = {
    0: '3600',
    1: '60',
    2: '1'
  }
  function gcd(x, y) {
    if (!y) return x;

    return gcd(y, x % y);
  };
  let partInMinutes = part.split(':');
  let partCount = 0;
  let totalInMinutes = total.split(':');
  let totalCount = 0;

  for (let i = 0; i < partInMinutes.length; i++) {
    const element = partInMinutes[i];
    
    partInMinutes[i] = element * conversion[i];
    partCount += partInMinutes[i];

    totalInMinutes[i] = totalInMinutes[i] * conversion[i];
    totalCount += totalInMinutes[i]
  }
  const divisor = gcd(partCount, totalCount);
  const fraction = `${partCount/divisor}/${totalCount/divisor}`;

  return fraction
}


console.log(getCompleted('03:30:30', '05:50:50'))