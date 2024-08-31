// var strObj = new String("This is a string.");
// var str = "This is a string.";
// console.log(strObj===str);
// console.log(typeof str);
// console.log(typeof strObj);
// var str = "This 'is' a \"string\".";
// var str1='This \'is\' a "string".';
// var str2 = `This "is" a 'string'.`;

// var num1=20;
// var num2=30;
// var result = "Sum of "+num1+" + "+num2+" = "+num1+num2;
// console.log(result)
// var sum =`Sum of ${num1} + ${num2} = ${num1+num2}`;
// console.log(sum)

// var str = "This is a string.";
//Length
// console.log(str.length);

//Slice
// var sliced = str.slice(1,5);
// var sliced = str.slice(-5,-1);
// console.log(sliced);

// subString
// var _subString = str.substring(1,6);
// console.log(_subString)

//substr
// var _subStr = str.substr(1,5);
// console.log(_subStr);

//charAt
// console.log(str.charAt(1));
// console.log(str.indexOf("is"));
// console.log(str.lastIndexOf('is'));

//UpperCase & LowerCase

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//Trim
// var str = "       This is a string.     ";
// console.log(str.length);
// var str1 =str.trim();
// // console.log()
// console.log(str1.length);

//trimEnd, trimStart

//padding
// var a = "a";
// var a = "1324567890"
// var b = a.padEnd(5,".");
// var b = a.padStart(5,"123456");
// console.log(b)

var str = "This is a string 1";
var str1 = "This is a string 2";
var str3 = "This is a string 1";

// var replaced = str.replace("is","at");
// var replaced = str.replaceAll("is","at");
// console.log(replaced)

// var concated = str.concat(str1,str3);
var concated = str + str1+str3;
console.log(concated)
