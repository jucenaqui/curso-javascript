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