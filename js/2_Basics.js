/*
1. Strings
    A. str.length; indices - str[0], str[1], str[2];
        here length is a property it dosent do any work its just value stored
    B. Literals
        A way to have embedded expressions in strings
        To create strings by doing substitution of placeholders
    C. Escape Chars
        \t-tab space,\n-new line
        will be counted as only one char in .length
    D. Methods - does the work  
        str.toUpperCase(),str.toLowerCase(),str.trim( ) // removes whitespaces
        str.slice(start, end?) // returns part of string
        str1.concat( str2 ) // joins str2 with str1
        str.replace( searchVal, newVal ), str.charAt( idx )

2. Arrays
    * Collections of items.Stored in continiuous manner
    * Each element can have different data type.
    * It is a good practice to creat array with same  datatype.
    * Type of array is object - here key is index starts from 0 and
    * Arrays are dynamic in JavaScript

3. Objects:
    * An object literal is a list of property names:values inside curly braces {}.
    *
*/


let str = "Keshav";
console.log(str.length);
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i), " ", str[i], " ", str.charCodeAt(i));
}
 

let age = 18;
let strLit = `My Name is Keshav.\nI am\t${age} years old`;
console.log(strLit)



let arr = [80,70,35,60];
console.log(typeof(arr));
// for of loop
for (const i of arr) {
    console.log(i);
}
// Methods
arr.push(40,99)
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(100);//adds elements to start
console.log(arr);
arr.shift();// deletes elem at start
console.log(arr);

console.log(arr.toString()); 

console.log(arr.concat([50,55,60,65]));

console.log(arr.slice(0,4)); // returns a piece of the array start is included and end excluded

// splice(startIdx, delCount, newEl1...) change original array (add, remove, replace)
console.log(arr);
// add two elements at second index
arr.splice(2,0,101,102);
console.log(arr); 
//remove added elements
arr.splice(2,2);
console.log(arr);
//replace second element with 99
arr.splice(2,1,99);
console.log(arr);

// const human =  Object.create() // singleton
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



const employee = new Object();

const person1 = new person("keshav", "Wanjale", 22, "Brown")

console.log(person1);
console.log(person);

console.log(Object.entries(person));

// Returns an array of the keys of an object
console.log(Object.keys(person));

// Returns an array of the property values of an object
console.log(Object.values(person));

Object.assign(employee, person)

console.log(employee);
console.log(human);
 

/*
* The rest syntax collects multiple values into a single array or object. It is used in functions or destructuring to handle an 
indefinite number of arguments or extract specific parts of data.
* The spread syntax is used to unpack or expand elements of an array, object, or iterable into individual elements.
 */
// Rest to collect arguments
function introduce(name, ...hobbies) {
    console.log(`Hello, I am ${name}. My hobbies are: ${hobbies.join(", ")}.`);
}
introduce("Alice", "reading", "traveling", "coding");

// Spread to pass array elements as arguments
const scores = [45, 78, 92];
console.log(Math.max(...scores)); 