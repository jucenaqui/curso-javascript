// prototypal inheritance
let developer = {
  name: 'Anonymous',
  lastname: 'Anonymous',
  fullname: function(){
    return this.name + ' ' + this.lastname;
  }
};

let bruce = {
    name: 'Bruce',
    lastname: 'Wayne'
}
let joker = {
    name: 'Joker'
}

bruce.__proto__ = developer;
joker.__proto__ = developer;
console.log(bruce.fullname());
console.log(bruce.__proto__.__proto__)


let person = {
    name: 'Anonymous',
    lastname: 'Anonymous',
    age: 18,
    fullname: function(){
        return this.name + ' ' + this.lastname;
    }
}

let developer = {
    languages: ['Javascript', 'C#', 'Java']
}

let esteban = {
    name: 'Esteban',
    lastname: 'Hernandez',
    age: 22
}

developer.__proto__ = person;
esteban.__proto__ = developer;
console.log(esteban.__proto__.__proto__)
console.log(esteban.fullname())

function Developer() {
    this.languages =  ['Javascript', 'C#', 'Java'];
}

Developer.prototype.saludar = function() {
    console.log('hola');
}

const newDeveloper = new Developer();
console.log(newDeveloper.saludar())

const newDeveloper2 = new Developer();
console.log(newDeveloper2.saludar())

// function constructors
function Person() {
    this.name = 'Default';
    this.lastname = 'Default';
    this.fullname = function(){
        return this.name + ' ' + this.lastname;
    }
}

let mao = new Person();
mao.name = 'mauricio';
mao.lastname = 'pelaez';
console.log(mao.fullname());

let andres = new Person();
andres.name = 'andres';
console.log(andres.fullname());