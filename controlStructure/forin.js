/*
for...in. Su definición exacta implica el uso de objetos, 
permitiendo recorrer las propiedades de un objeto. En cada 
iteración, un nuevo nombre de propiedad del objeto es asignada
 a la variable

for(propiedad in object) {
    if (object.hasOwnProperty(propiedad)) {
      ...
    }
}
*/

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var user = { name:'carlos',edad:34};
for(i in user) {
  console.log(`user: ${i} = ${user[i]}`);
}

for(i in dias) {
    console.log(dias[i]);
  }