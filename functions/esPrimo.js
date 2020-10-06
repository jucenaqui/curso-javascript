// 5
function esPrimo(numero) {
  if (numero > 0 && numero < 4 || numero === 5) {
    return true;
  }
  if ( (numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) ) {
    return false;
  }
  return true;
}
const numeros = [2,3,89,34,23,11,17,29,30,6,18];
let primos = [];
for (let i = 0; i < numeros.length; i++) {
  if ( esPrimo(numeros[i]) ) {
    primos.push(numeros[i]);
  }
}
console.log(primos);