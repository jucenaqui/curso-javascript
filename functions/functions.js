function square(number) {
    return number * number;
}

function message() {
    return "hola mundo.";
}

function messageTwo() {
    var message = "hola mundo.";
}

function messageThree(name, number) {
    return `hola ${ name }, yo se que tu tienes ${ square(number)} años`;
}

function showFullName(user) {
    return `hola ${user.name} ${user.lastName}`;
}

function showFullNameArray(users) {
    return `hola ${users[0].name} ${users[0].lastName}`;
}

function sum(num1, num2) {
    return num1 + num2;
}

console.log( messageTwo(2,5) );