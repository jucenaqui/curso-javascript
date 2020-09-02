// tipos de variables

var nombre; // undefined
var cadena = 'carlos'; // string
var numero = 12; // number
var boolean = true; // boolean  ( true o false )
var esNull = null; // null
var object = { nombre: 'pedro',  apellido: 'perez',  edad: 23, }; // object
var array = [ 'lunes','martes','miercoles','jueves','viernes','sabado','domingo' ];
var array2 = [ 23,34,54,12,4 ];
var array3 = [ 23, true, 'uno', { nombre: 'carlos' }, [ 'uno', 'dos' ] ];
var trabajadoresEmpresa = [
    { id:'0001', nombre: 'pedro',  apellido: 'perez',  edad: 23, },
    { id:'0002', nombre: 'mauricio',  apellido: 'pulgarin',  edad: 38, },
    { id:'0003', nombre: 'maria',  apellido: 'suarez',  edad: 23, }
];
console.log(trabajadoresEmpresa[2].nombre + ' ' + trabajadoresEmpresa[2].apellido);
console.log( typeof(nombre) );
console.log( typeof(cadena) );
console.log( typeof(numero) );
console.log( typeof(boolean) );
console.log( typeof(esNull) );
console.log( typeof(object) );
console.log( typeof(array) );
console.log(trabajadoresEmpresa);


