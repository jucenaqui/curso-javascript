// apply()
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

print.apply(person, ['hello', 'special']);