//  Crear un programa que realice las operaciones 
// matemáticas de suma, resta, multiplicación, división,
//  al digitar dos números.

function calculator(num1, num2) {
    return function(operator) {
        if (operator === 'suma')
            return num1 + num2;
        if (operator === 'resta')
            return num1 - num2;
        if (operator === 'multiplicacion')
            return num1 * num2;
        if (operator === 'division')
            return num1 / num2;
    };
}

function calculator(num1, num2) {
    return function(operator) {
        switch (operator) {
            case 'suma': return num1 + num2;
            case 'resta': return num1 - num2;
            case 'multiplicacion': return num1 * num2;
            case 'division': return num1 / num2;
        }
    };
}

var calculate = calculator(2,5);
var sum = calculate('suma');
var rest = calculate('resta');
var mult = calculate('multiplicacion');
var div = calculate('division');
console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);

