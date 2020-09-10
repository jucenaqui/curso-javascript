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

var greet = welcome('bruce');
greet();