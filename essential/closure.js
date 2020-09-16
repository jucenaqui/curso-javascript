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


function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count = count === 0 ? 0 : --count;
        },
        show: function() {
            return count;
        },
        reset: function() {
            count = 0;
        }
    };
}

var count = counter();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
count.decrement();
console.log(count.show());

var count2 = counter();
count2.increment();
console.log(count2.show());







