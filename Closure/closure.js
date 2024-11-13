// var count = 0;
// function counter(){        
//         return count++;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



function outterCounter(){   
    var count = 0;
    return function innerCounter(){
        return count++;
    }   
}

var counter = outterCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());