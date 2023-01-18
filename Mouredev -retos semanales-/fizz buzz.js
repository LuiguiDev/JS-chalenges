// Dificultad: Fácil;
// Escribe un programa que devuelva los numeros del 1 al 100, donde los multiplos de 3 sean reemplazados por "fizz", los multiplos de 5 por "buzz" y si es multiplo de 3 & 5, "fizzbuzz";

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    const current = i;
    
    if(current % 5 === 0 && current % 3 === 0){
      console.log('fizzbuzz');
    }else if(current % 5 === 0){
      console.log('buzz');
    }else if(current % 3 === 0){
      console.log('fizz');
    }else{
      console.log(i)
    }
  }
}

fizzbuzz()