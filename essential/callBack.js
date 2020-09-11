// callbacks

function message(name, callback) {
    var hey = `hello, ${name}`;
    callback(null, hey);
}

message('sofia', function(err, value){
    if (err) {
        console.log(err);
    } else {
        console.log(value);
    }
});

// Proveedor
function div(a, b, callback) {
  if (b === 0) callback (Error (...))
  else {
      var result = a / b;
      callback (null, result);
  }
}
// Cliente
div (8, 2, function (error, data) {
  if (error) console.error (error);
  else console.log (data);
});

getData('user1', function(err, data) {
  if (err) {
    return;
  }
  // Do stuffs with data
});

function getData(id, cb) {
  var data = [{id: 'user1', name: 'Bruce'},{id: 'user2', name: 'Waine'}];
  var result;
  for (var index = 0; index < data.length; index++) {
     if ( data[index].id === id) {
        result = [ data[index] ];
     }
  }
  cb(null, result);
}


function asyncSquare(value, callback) {
  console.log('start execution with value =', value);
  setTimeout( function(){
    callback(value, value * value);
  }, 0 | Math.random() * 100);
}

asyncSquare(2, function(value, result) {
  console.log('End execution with value =', value, 'and result =', result);
});
console.log('Completed ?');