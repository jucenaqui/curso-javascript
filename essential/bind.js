var person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
};

var print = function(greet, adj) {
  return `${greet}, ${this.fullname()}, 'you are', ${adj}`;
};

// print('hello', 'special');
var printBinded = print.bind(person, 'hello');
console.log(printBinded('special'));

var print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}.bind(person);

print('hello', 'special');