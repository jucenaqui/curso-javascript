// generators
function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
  }
  
  var numbers = [0,1,2,3,4,5]
  function* gen(array, callback) {
    for (var i = 0; i < array.length; i++) {
        yield asyncSqrt(array[i], callback);
    }
  }
  
  var iterator = gen(numbers, function (value, result) {
    console.log('END execution with value =', value, 'and result =', result);
    iterator.next();
  });
  iterator.next();