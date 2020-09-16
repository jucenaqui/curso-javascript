// 1-5. Leer tres calificaciones de un alumno y determinar su promedio
function promedioNotas (cal1,cal2,cal3){
    let calificacionPromedio  = ((cal1+cal2+cal3)/3).toFixed(2);
    return `El promedio de notas es: ${calificacionPromedio}`;
}
var promedio = promedioNotas(3.5,4.2,5.0);
console.log(promedio);