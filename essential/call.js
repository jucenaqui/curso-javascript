// call()
var person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
}

var print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}

print.call(person, 'hello', 'special');