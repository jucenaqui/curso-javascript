function tablaMultiplicar(numero) {
    let tabla = '';
    for(i=1;i<=10;i++){
      tabla += `${numero} * ${i} = ${numero * i} \n`;
    }
    return tabla;
  }
  
  function tablaMultiplicar(numero) {
    let tabla = [];
    for(i=1;i<=10;i++){
      tabla.push( { tabla: numero, multiplicador: i, valor: numero * i });
    }
    return tabla;
  }
  
  let tabla31 = tablaMultiplicar(31);
  console.log(tabla31);