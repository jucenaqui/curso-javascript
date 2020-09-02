/*
try catch La estructura try consiste en un bloque de código que se 
ejecuta de manera normal, y captura cualquier excepción 
que se pueda producir en ese bloque de sentencias
*/

try {
    // todo lo que se ejecuta esta protegido
    // llamo a una api para que devuelva un usuario
} catch (ex) {
    console.log("Error detectado: " + ex);
}