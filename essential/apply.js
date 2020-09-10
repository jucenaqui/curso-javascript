// apply()

var person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
};
print.apply(person, ['hello', 'special']);