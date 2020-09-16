// 1-4.  Leer un número entre el 1 y el 10 e imprimir su equivalente en números romanos
function numeroAromano(num) {
    switch(num) {
      case 1: return `El numero romano de 1 es: I`;
      case 2: return `El numero romano de 2 es: II`;
      case 3: return `El numero romano de 3 es: III`;
      case 4: return `El numero romano de 4 es: IV`;
      case 5: return `El numero romano de 5 es: V`;
      case 6: return `El numero romano de 6 es: VI`;
      case 7: return `El numero romano de 7 es: VII`;
      case 8: return `El numero romano de 8 es: VIII`;
      case 9: return `El numero romano de 9 es: IX`;
      case 10: return `El numero romano de 10 es: X`;
      default: return `El numero ingresado es invalido`;
      }
  }
  var romano = numeroAromano(3);
  console.log(romano);