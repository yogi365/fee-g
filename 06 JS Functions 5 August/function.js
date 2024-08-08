// function functionName(firstName, lastName){
//     //function defination
//     return firstName+" "+lastName;
// }

// var value = functionName("Abc","Xyz");

// console.log(value)


// var functionVar = functionName;

// console.log(functionVar("Abc","Xyz"));


// var functionExpression = function(firstName, lastName){
//     return firstName+" "+lastName;
// }

// console.log(functionExpression("Abc","Xyz"));

// function sum(a,b){
//     return a+b;
// }

// function difference(a,b){
//     return a-b
// }

// function arithmeticOperations(a,b,operations){
//     return operations(a,b);
// }

// var result = arithmeticOperations(5,8,(a,b)=>a*b);

// console.log(result)
// var square = a=>a*a

//iife - immediately invoking function execution

(
    function(a,b){
        console.log(a+b);
    }
)(5,3);