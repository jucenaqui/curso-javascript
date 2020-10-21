// reduce
//toma todos los elementos en un array, y los reduce en un solo valor. Array.prototype

// with forEach
const numbers = [1, 2, 3, 4, 5];
let  total = 0;
    
numbers.forEach(function (number) {
   total += number;
});
// console.log(total);

// reduce
const total2 = numbers.reduce(function( ant, actual){
    return ant + actual;
});
const total3 = numbers.reduce( ( ant, actual) => ant + actual );
console.log(total3);

const tasks = [
    { 'name': 'teach javascript', 'duration': 120, 'execute': false },
    { 'name': 'Work out', 'duration': 60, 'execute': true },
    { 'name': 'Procrastinate on Duolingo', 'duration': 240, 'execute': true}
];
// ¿Y si queríamos saber la cantidad total de tiempo que pasamos trabajando hoy?
// with forEach
let totalTime1 = 0;
tasks.forEach(function (task) {
    totalTime1 += task.duration;
});
// console.log(totalTime1);

// with reduce
let totalTime2 = tasks.reduce(function (previous, current) {
    return previous + current.duration;
  },0);
  console.log(totalTime2);


  // implementacion 
const reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
     
    array.forEach(function (element) {
       accumulator = callback(accumulator, element);
    });
    return accumulator;
  };

  /// uso final

const tasks = [
    { 'name': 'teach javascript', 'duration' : 120 },
    { 'name': 'Work out', 'duration' : 60 },
    { 'name': 'Procrastinate on Duolingo', 'duration' : 240}
  ];
  
console.log(tasks.map(function (task) {
    return (task.duration / 60); // [2,1,4]
  }).filter(function (duration) {
    return duration >= 2; // [2,4]
  }).map(function (duration) {
    return duration * 25; // [50, 100]
  }).reduce(function (accumulator, current) {
    return [(+accumulator) + (+current)]; // 150
  }).map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2); // [$150.00]
  }).reduce(function (formatted_dollar_amount) {
    return formatted_dollar_amount;
  }));

  console.log(tasks.map( task => task.duration / 60 )
  .filter( duration =>  duration >= 2 )
  .map( duration => duration * 25)
  .reduce( (accumulator, current) => [(+accumulator) + (+current)])
  .map( dollar_amount => '$' + dollar_amount.toFixed(2))
  .reduce( formatted_dollar_amount => formatted_dollar_amount));
