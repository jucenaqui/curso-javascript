/// map 
// toma un array y modifica cada elemento del mismo Array.prototype

const tasks = [
    { 'name': 'teach javascript', 'duration' : 120 },
    { 'name': 'Work out', 'duration' : 60 },
    { 'name': 'Procrastinate on Duolingo', 'duration' : 240}
  ];
const numbers = [0,9,8,3,4,5];

const cuadrados = numbers.map( function(value){
    return value * value;
});
// console.log(cuadrados);

//

var task_names = [];
 
for (var i = 0, max = tasks.length; i < max; i += 1) {
 
    task_names.push(tasks[i].name);
 
}
console.log(task_names);

// forEach
var task_names = [];
 
tasks.forEach(function (task) {
 
    task_names.push(task.name);
     
});


const tasks = [
    { 'name': 'teach javascript', 'duration' : 120 },
    { 'name': 'Work out', 'duration' : 60 },
    { 'name': 'Procrastinate on Duolingo', 'duration' : 240}
  ];
// with map
const task_names = tasks.map(function (task) {
 
    return task.name; 
  
});
console.log(task_names);

// implementacion
var map = function (array, callback) {
 
    var new_array = [];
  
    array.forEach(function (element, index, array) {
       new_array.push(callback(element)); 
    });
    return new_array;
  };
  
  var task_names = map(tasks, function (task) {
    return task.name;
  }); 


