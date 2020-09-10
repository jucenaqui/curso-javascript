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