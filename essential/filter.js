/// filter function
//toma una array, y filtra los elementos no deseados. Array.prototype


const tasks = [
    { 'name': 'teach javascript', 'duration': 120, 'execute': false },
    { 'name': 'Work out', 'duration': 60, 'execute': true },
    { 'name': 'Procrastinate on Duolingo', 'duration': 240, 'execute': true}
];
// una lista de sólo las tareas que me llevó dos horas o más para hacer.
// forEach
const  difficultTask = [];

tasks.forEach( function(task) {
    if (task.duration >= 120 ) {
        difficultTask.push(task);
    }
});
// console.log(difficultTask);

/// filter
const difficultTask2 = tasks.filter(function(task){
    return task.duration >= 120 && task.execute;
});
console.log(difficultTask2);

// /// implementacion 
const filter = function (array, callback) {
 
    const filtered_array = [];
  
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);    
        }
    });
    return filtered_array;
  };