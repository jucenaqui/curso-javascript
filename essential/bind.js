// bind()
var person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
};

var print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
};

print('hello', 'special'); // this.fullname is not a function

var printBinded = print.bind(person);

printBinded('hello', 'special');


var print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}.bind(person);

print('hello', 'special');