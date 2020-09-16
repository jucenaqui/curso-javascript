// 1-7. Leer dos números enteros, restar el menor del mayor y mostrar el resultado.
function restarMenor(numero1,numero2) {    
    
    return numero1 > numero2 ?
        `El Resutado de la resta de los números es: ${numero1 - numero2}`
        :
        `El Resutado de la resta de los números es: ${ numero2 - numero1}`;
  } 
  restarMenor(23,40,0);