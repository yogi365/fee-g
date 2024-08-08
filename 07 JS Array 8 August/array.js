// var arr = new Array();
// var arr = [1,2,3,4,5]
// console.log(typeof arr)
// var arr = [1,2,3,"String",true,
//             {name:"abc",age:25},undefined,
//             [5,6,7,8]];

// var a = arr[7]
// console.log(arr[7][1])
// console.log(arr[5].name)
// var arr = [1,2,3,4,5];
// arr[0]=2;
// arr = [8,5,9,2,0,1]
// console.log(arr);


// var arr = [1,2,3,4,5];
// arr[60]=10;
// console.log(arr[58]);


// var arr = [1,2,3,4,5];
// pop
// var poped = arr.pop();
// console.log(poped);

//push
// arr.push("Hello")
// console.log(arr);

//shift
// var shifted = arr.shift();
// console.log(arr)

//unshift
// arr.unshift(10);
// console.log(arr);

// var arr = [1,2,3,4,5];
// var newArr = [];

// for(let i = 0;i<arr.length;i++){
//     if(i==3){
//         continue;
//     }
//     newArr.push(arr[i]);
// }

// console.log(arr,newArr)

// arr.splice(1,3,12,13);
// arr.splice(1,0,5,5);
// console.log(arr)

// function add(b,c,...a){
//     let sum=0;
//     for(let i=0;i<a.length;i++){
//         sum+=a[i];
//     }
//     return sum;
// }

// var result = add(4,5,8,10);
// console.log(result);


const arr = [9,8,3,4,5,11];
// arr = [7,8,9,10];
// arr[2] = [7,8,9,10];
// console.log(arr)
// arr.reverse();
arr.sort((a,b)=>b-a);
console.log(arr);