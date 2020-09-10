// function borrowing
var person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
}

var actor = {
  name: 'Clint',
  lastname: 'Eastwood'
}

var result = person.fullname.apply(actor);
console.log(result); // Clint Eastwood