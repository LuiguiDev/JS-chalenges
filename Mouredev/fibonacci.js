// Escribe un programa qur imprima los promeros 50 numeros de la sucecion de fibonacci, una suceción de numeros en la que el siguente numero es la suma de los 2 anteriores;
// Ej: 0, 1, 1, 2, 3, 5, 8, 13...

function fibonacci() {
  let n0 = 0;
  let n1 = 1;
  for (let i = 0; i < 50; i++) {
    console.log(n0)
    let fib = n0 + n1;
    n0 = n1;
    n1 = fib;
  }  
}

// Solución 2: Dada una posición en la serie fibonacci, determinar el valor (recursión);
function fibonacci2(n) {
  if(n < 2) return n
  return fibonacci2(n - 2) + fibonacci2(n - 1)
}
console.log(fibonacci2(7)) // Expected: 13;

// Solución 3 (Iteración)
function fibonacci3(n) {
  let serie = [0, 1];

  for(let i = 2; i <= n; i++){
    serie[i] = serie[i -2] + serie[i -1];
  }

  return serie[n]
}

fibonacci3(7);