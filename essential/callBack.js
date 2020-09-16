function message(name, cb) {
    setTimeout(function() {
        let hey = `hello, ${name}`;
        cb(hey);
    }, 5000);
    console.log('fuera del settimeout');
}

message('andres', function(value) {
    console.log(value);
});

// 2

function message2(name, cb) {
    setTimeout(function() {
        let hey = '';
        let error = null;  
        try {
            // hey = `hello, ${name}`;
            hey = new Error('error producido por mi');
        } catch(err) {
            error = `error: ${err}`;
        }
        cb(error, hey);
    }, 5000);
    console.log('fuera del settimeout');
}

message2('andres', function(err, value) {
    if (err) {
        console.log(err);
    } else {
        console.log(value);
    }
});

// 3
// Programador
function div(a, b, callback) {
    if (b === 0) callback( 'division por cero');
    else {
        var result = a / b;
        callback (null, result);
    }
}

// Cliente
div (8, 0, function(error, data) {
    if (error) console.error (error);
    else console.log (data);
});


// 4
function getData(id, cb) {
    let data = [{id: 'user1', name: 'Bruce'},{id: 'user2', name: 'Waine'}];
    let result;
    for (let index = 0; index < data.length; index++) {
       if ( data[index].id === id) {
          result = [ data[index] ];
       }
    }
    cb(null, result);
}

getData('user1', function(err, user) {
    if (err) {
        console.log('no se pudo realiar');
    } else {
        console.log(user);
    }
});

// 5
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


  // 6
  const fs = require('fs');

  fs.readFile('./file.txt', 'utf-8' , function(err, file) {
        if (err) {
            console.log(err);
        } else {
            let userSplit = file.split(/\r\n/);
            let users = [];
            let properties = [];
            for (let i = 0; i < userSplit.length; i++) {
                let rowSplit = userSplit[i].split(/\s/);
                if (i === 0) {
                    properties = rowSplit;
                    continue;
                }
                if ( rowSplit.length === 1) break;
                let obj = {};
                for (let index = 0; index < properties.length; index++) {
                    obj[properties[index]] = rowSplit[index]; 
                }
                users.push(obj);
            }
            console.log(users);
        }
  });


