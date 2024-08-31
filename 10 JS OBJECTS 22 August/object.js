// var obj = new Object();
var obj = {
    "first Name":"Abc",
    lastName:"Xyz",
    age:20,
    course:"B.E. CSE",
    grade:[15,16,17,25],
    fullName:function(){
        return this.firstName+" "+this.lastName
    }
}
// var firstName = "firstName"

// console.log(obj["first Name"])

// obj.grade.forEach((ele,index,array)=>{
//     array[index]=ele-2;
// })

// console.log(obj.fullName());
// console.log(obj.hasOwnProperty("first "))

// delete obj.lastName;
// console.log(obj);

// for(key in obj){
//     // console.log(key);
//     console.log(obj[key])
// }