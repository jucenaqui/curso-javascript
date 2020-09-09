//  Alcance - ambito - scope  => 

function baz() {
  var foo = 'baz';
}
console.log(foo); //foo is not defined

// cadena de alcance
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a(); // 1

// this
function foo() {
  this.baz = 'hello';
  console.log(this);
 }
 function bar() {
  console.log(this);
 }
 
 foo(); // window global object
 bar(); // same window global object
 console.log(baz); // hello
 
var myObject = {
  name: 'Bruce Object',
  me: function () {
    this.name = 'Joker Object';
    console.log(this);
  }
}
myObject.me(); // { name: 'Joker Object', me: [Function: me] }

var myObject = {
  name: 'Bruce Object',
  me: function () {
    this.name = 'Joker Object';
    console.log(this);

    var setName = function (name) {
      this.name = name;
    }
    setName('Robin Object');
    console.log(this); // { name: 'Joker Object', me: [Function: me] }
  }
}
myObject.me();

// arguments
function register(name, lastname, age) {
  console.log(name, lastname, age);
}

register(); // undefined undefined undefined
register('Bruce'); // Bruce undefined undefined
register('Bruce', 'Wayne'); // Bruce Wayne undefined
register('Bruce', 'Wayne', 88); // Bruce Wayne 88

function register() {
  console.log(arguments);
}

register(); // {}
register('Bruce'); // { 0: 'Bruce' }
register('Bruce', 'Wayne'); // { 0: 'Bruce', 1: 'Wayne' }
register('Bruce', 'Wayne', 88); // { 0: 'Bruce', 1: 'Wayne', 2: 88 }

// IIFEs (Immediately Invoked Functions Expressions)
var myFunc = function(name) {
  console.log(name);
}('Bruce');

function (name) {
  console.log(name);
}('Bruce'); // Unexpected token (

  (function(name) {
    console.log(name);
  })('Bruce'); //Bruce


// closures

function welcome(id) {
    return function () {
      console.log('hello ' + id);
    };
}

var greet = welcome('bruce');
console.log(greet);
greet();

var users = [{ email:'maria@maria.com'}, { email: 'camilo@camilo.com'}, { email: 'juan@juan.com'}]


function getProperty(property) {
    return function(object) {
        return object[property];
    };
}

 var userEmail = users.map( getProperty('email') );
 console.log(userEmail);

 


