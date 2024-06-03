"use strict";
//NAMED FUNCTION
function add(num1, num2) {
    return num1 + num2;
}
let numeric = add(12, 32);
console.log("NAMED FUNCTION", numeric);
// ANONYMOUS FUNCTION
let myfun = function (a, b) {
    return a + b;
};
console.log("ANONYMOUS FUNCTION", myfun(12, 3));
// ANONYMOUS FUNCTION WITH EXPLICT TYPE
let myfun2 = function (n, n1) {
    return n + n1;
};
console.log("ANONYMOUS FUNCTION WITH EXPLICT TYPE", myfun2(12, 32));
//TYPE NAME DONT METTER
let myfun3 = function (n, n1) {
    return n + n1;
};
console.log("TYPE NAME DONT METTER", myfun3(12, 12));
//LAMBDA FUNCTION
const add3 = (a, b) => a + b;
let myfun5 = (n, c) => n + c;
// const add4 : (a: number, b: number) => a + b; // colomn error 
//Named function  with optional parameter 
function builtName(firdtName, secoundName) {
    if (secoundName) {
        return firdtName + " " + secoundName;
    }
    else
        return firdtName;
}
let res = builtName("muzaffar", "ali");
let res1 = builtName("muzaffar");
console.log("optional parameter", res);
console.log("optional parameter", res1);
//Anonymos function with optional parameter
let myName = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else
        return firstName;
};
let result = myName("kalwar", "king");
let result2 = myName("kalwar");
console.log("Anonymos optional parameter", result);
console.log("Anonymos optional parameter", result2);
//Named function  with default parameter parameter 
function builtName1(firdtName, secoundName = "khan") {
    if (secoundName) {
        return firdtName + " " + secoundName;
    }
    else
        return firdtName;
}
let res3 = builtName1("muzaffar", "ali");
let res4 = builtName1("muzaffar");
console.log("default parameter parameter ", res3);
console.log("default parameter parameter ", res4);
//rest parameter 
function rest_para(firdtName, ...restofname) {
    return firdtName + " " + restofname.join(" ");
}
let person = rest_para("israr", "nafay", "kalwr", "ali");
let person1 = rest_para("Muzaffar", "Ali", "Kalwar");
console.log("rest parameter ", person);
console.log("rest parameter ", person1);
