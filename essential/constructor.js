// function constructors
function Person() {
  this.name = 'camilo';
  this.lastname = 'jaramillo';
}

var bruce = new Person();
console.log(bruce);

var bruce = Person();
console.log(bruce);

console.log(bruce.name); // TypeError: Cannot read property 'name' of undefined


function Person (name) {
  console.log(this); // Person {}
  this.name = name;
}

var bruce = new Person('Bruce');

console.log(bruce.__proto__); // Person {}