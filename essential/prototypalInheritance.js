// prototypal inheritance
var developer = {
  name: 'Anonymous',
  lastname: 'Anonymous',
  fullname: function(){
    return this.name + ' ' + this.lastname;
  }
};

var bruce = {
  name: 'Bruce',
  lastname: 'Wayne'
};

var joker = {
  name: 'Joker'
};

// WARNING: EVIL IS PRESENT IN THIS SECTION, DON'T TRY THIS IN YOUR WORK, PLEASE.
bruce.__proto__ = developer;
joker.__proto__ = developer;

console.log(bruce.fullname());
console.log(joker.fullname());

// otro heritance
var person = {
  name: 'Anonymous',
  lastname: 'Anonymous',
  age: 18,
  hair: true
};

var developer = {
  languages: ['Javascript', 'C#', 'Java']
};

var esteban = {
  name: 'Esteban',
  lastname: 'Hernandez',
  age: 22
};

developer.__proto__ = person;
esteban.__proto__ = developer;

console.log(esteban.__proto__.__proto__);