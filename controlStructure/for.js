/*
for La estructura for permite realizar bucles de una 
forma muy sencilla

for(inicializacion; condicion; actualizacion) {
    ...
}
*/

// inicializacion; condicion; actualizacion
for(var i = 0; i < 5; i = i + 1) {
    console.log(i);
}


var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for(var i=0; i<dias.length; i++) {
  console.log(dias[i]); // i = 2 ; dias[i] = dias[0]
}