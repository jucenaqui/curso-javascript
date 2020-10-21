/// arrow function
// Una expresión de función flecha es una alternativa compacta
//  a una expresión de función tradicional, pero es limitada y no se
//   puede utilizar en todas las situaciones.

// Diferencias y limitaciones:

// No tiene sus propios enlaces a this y no se debe usar como métodos.
// No tiene argumentos
// No apta para los métodos call, apply y bind, que generalmente se
// basan en establecer un ámbito o alcance
// No se puede utilizar como constructor.
// No se puede utilizar yield dentro de su cuerpo.

// var myObject = {
//     name: 'Bruce Object',
//     me: function () {
//       this.name = 'Joker Object';
//       console.log(this);
//     }
//   };
//   console(myObject.me())

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log( materials.map( material => material.length ) );


// Función tradicional
function cualquiera(a){
    return a + 100;
}
// 1. Elimina la palabra "function" y coloca la flecha entre
//  el argumento y el corchete de apertura.

(a) => {
    return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" —
//  el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;



// Por ejemplo, si tienes varios argumentos o ningún argumento,
//  deberás volver a introducir paréntesis alrededor de los argumentos:
// Función tradicional
function sum(a, b){
    return a + b + 100;
}
// Función flecha
const sum = (a, b) => a + b + 100;
const sum = () => 100;

// Del mismo modo, si el cuerpo requiere líneas de procesamiento 
// adicionales, deberás volver a introducir los corchetes Más el 
// "return" (las funciones flecha no adivinan mágicamente qué o 
// cuándo quieres "volver"):

// Función tradicional
function sum2 (a, b){
    let chuck = 42;
    return a + b + chuck;
}
// Función flecha
const sum3 = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
}

// Y finalmente, en las funciones con nombre tratamos las expresiones
//  de flecha como variables
// Función tradicional
function bob (a){
    return a + 100;
}
// Función flecha
let bob2 = a => a + 100;
console.log(bob2(5))


const sumaTwoNumbers = num1 => num2 => num1 + num2; 

const suma2 = function(num1){
    return function(num2){
        return num1 + num2;
    }
}

const suma = sumaTwoNumbers(5);
const suma3 = sumaTwoNumbers(5);
console.log(suma(8))
console.log(suma3(8))


// Para devolver una expresión de objeto literal, se requieren
//  paréntesis alrededor de la expresión:
const obj = params => ({foo: "a"}) // devuelve el objeto {foo: "a"}
console.log(obj('adh'))

const materials2 = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const obj = materials2.map( material => ({name: material}));
console.log(obj)

