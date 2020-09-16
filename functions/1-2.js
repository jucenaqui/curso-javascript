// 1-2 Leer tres números y decir cuál de ellos es el que tiene el valor intermedio
function numeroIntermedio(num1,num2,num3){

    if((num1 < num2 && num1 > num3) || (num1>num2 && num1<num3)){
       return `El numero intermedio es ${num1}`;
    
    }else if((num2 > num1 && num2 < num3) ||(num2 <num1 && num2 > num3)){
       return `El numero intermedio es ${num2}`;
    }else{
         return `El numero intermedio es ${num3}`; 
    } 
  }
  var intermedio = numeroIntermedio(5,1,3);
  console.log(intermedio);