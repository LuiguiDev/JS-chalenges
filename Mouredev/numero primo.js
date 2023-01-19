// Difucultad: Media
// Determinar si un numero dado es primo o no;

function esPrimo(n) {
  if(n <= 1){
    return false
  }else{
    for (let i = 2; i < n; i++) {
      if(n % i === 0) return false
    }
    return true
  }
}

console.log(esPrimo(4))