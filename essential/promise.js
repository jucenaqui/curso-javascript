let fs = require('fs');
let readFile = new Promise( function(resolve, reject){
    console.time('read');
    fs.readFile('./file.txt', 'utf-8', function(err, data){
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
        console.timeEnd('read');
    });
});

readFile.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log('el error es:',err);
});

let promise2 = new Promise(function(resolve, reject) {
    resolve(1);
});

promise2.then(function(result) {
    console.log(result); // 1
    return result + 2;
}).then(function(val){
    console.log(val);
    return val * 4;
}).then(function(val2){
    console.log(val2);
}).catch(function(err){
    console.log(err);
});


let fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(function(res){
        return res.json();
    }).then(function(data){
       console.log(data.filter(function(item){ return item.postId === 100})
       .map(function(item){ 
           return item.email;
       }));
    }).catch(function(err) {
        console.error(err);
    });


let fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(function(response){
    return response.json();
}).then(function(json){
    console.log(json);
});


let fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
}).then(function(res){
    return res.json();
}).then(function(result){
    console.log(result);
    // filtro y delvolver el array de los emails
}).catch(function(err){
    console.log(err);
});


let array = ['email: "Zola@lizzie.com","",""]