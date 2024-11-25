console.log("Hello World");
/* 
1 The console.log() static method outputs a message to the console.
*/

/* 
1. Variables: Variables are containers for data 
    Variable names are case sensitive; a” & “A” is different.
    only latters, digits _ and $ is allowed
    digits cannot bhe 1st char
    reserved word cannot be variable names
*   let, const & var  (let and var are hoisted (Cannot be used before decleration))
        var : Variable can be re-declared & updated. A global scope variable.
        let : Variable cannot be re-declared but can be updated. A block scope variable.
        const : Variable cannot be re-declared or updated. A block scope variable.
*   Data Types in JS
        Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
            BigInt, Symbol rarely used
        NonPrim : objects- Arrays Functions
            objects conssit of key:value pairs
            object can be defined with cost and let 
            we can edit key in obj even if we use const
            it will throw error if n only if it  we change the address of obj
*/

/**
 * Popup Boxes
 * Alert Box
An alert box in JavaScript is a popup window that displays a simple message to the user. It is triggered by 
the alert() function and pauses code execution until the user clicks the “OK” button to close it.
 * Prompt Box
A prompt box in JavaScript is a popup window that asks the user for input. It is triggered by the prompt() function, 
which displays a message and input field, allowing the user to provide a response or cancel.
 * Confirm Box
It is a type of pop-up box that is used to get authorization or permission from the user. The user has to press the 
ok or cancel button to proceed.
 */
const pi = 3.14;

console.log(username) // undefined

var username = "keshav";// not good preactice
let age = 24;//using let is good practice
let is_valid = false
let price = 99.99
let na = null
console.log(username +" "+age)
const student ={
    name:username,
    age:age,
    class:"10th",
};
console.log(typeof student);
console.log(student);
console.log(student.age);
student.age = 22;
console.log(student["age"]);

// Sepciallity of strings in JS
let str =  "Name";
let strNum = "123";
console.log(str+5);// Name5
console.log(strNum+5);//1235
// Specallity of int
let a = 1;
console.log(a + true + false);// 2 (1+true=1 and false = 0)


var x = 200
function foo() { 
    if (true) { 
        var x = '1';    // Exist in function scope 
        const y = '2';  // Exist in block scope 
        let z = '3';    // Exist in block scope 
    } 
    console.log(x); 
}
foo();

console.log(x)


/** Popup boxes */

// let userName = prompt("What is your name?", "John Doe");
// if (userName) {
//   alert(`Hello, ${userName}!`);
// } else {
//   alert("No name entered!");
// }

// let confirmDelete = confirm("Are you sure you want to delete this?");
// if (confirmDelete) {
//   alert("Item deleted!");
// } else {
//   alert("Action canceled.");
// }

// Hoisting
// functions are hoisted and made available
greet()
function greet() {
  console.log("hello")
}
console.log(hoist)
var hoist = 10
// console.log(hoist1) // for let and const (TDZ) ReferenceError: Cannot access 'hoist1' before initialization
let hoist1 = 100
// console.log(add())  // Function exp and class exp are not hoistedTypeError: add is not a function
var add = function(a=10,b=20){
  return a+b
}

