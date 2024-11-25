/* 
1. Functions
    * Block of code that performs a specific task, can be invoked whenever needed
    * Function expression (function stored as veriable)
2. Arrow Functions
    * Compact way of writing a function
    * Stores a function in variable 
    * can made with const let var
3. Higher Order Function/Method 
    * It is function which takes funcion as Argument or returns a function
4. Callback Function 
    * It is a function passed into another function as an argument,which is then 
    invoked inside the outer function to complete some kind of routine or action.
5. Array Methods
    a. arr.forEach(callbackFnx(value, index, array)) OR arr.forEach( ( val,idx,arr ) =>{implitn..;}) 
        * val,idx,arr any can be accesed
        * function to execute for each element in the array
        * function called inside forEach is callback function
    b. arr.map(( val ) => {implitn..;})
        * It is same as forEach but here we can make new Array 
        * Creates a new array with the results of some operation.
    c. arr.filter( ( ( val ) => {...;})
        * Creates a new array of elements that give true for a condition/filter.
        * Can be used to print odd/even number 
    d. arr.reduce( ( ( val ) => {...;})
        * Performs some operations & reduces the array to a single value. 
        * It returns that single value.
        * Can be used to calculate sum or avrage OR finding min and max

* Properties of Functions
    Parameters and Arguments
        Parameters are variables listed in the function declaration.
        Arguments are values passed to the function.
    The arguments Object Holds all arguments passed to a function (not available in arrow functions).

*/

// 1. Function Declaration
function calcAddition(number1, number2) { 
    return number1 + number2; 
}
console.log(calcAddition(6,9));

// 2. Function Expression
const square = function (number) {
    return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);

// 3. Arrow Functions
const value = (a, b) => a * b;
console.log(value(3, 5));

const number = (a, b) => {
    c = 5;
    return (a + b) * c;
};
console.log(number(2, 3));

// 4. Anonymous Functions (Functions without a name, often used as arguments or callbacks.) used in function expression
setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);
  
// 5. Nested Functions The inner function has access to the variables and arguments of the outer function. 
//However, variables declared within inner functions cannot be accessed by outer functions.
function msg(firstName) {
    function hey() {
        console.log("Hey " + firstName);
    }

    return hey();
}
msg("Ravi");

// 4. Immediately invoked function expression:
let msg1 = (function() {
    return "Welcome to GfG" ;
})();
console.log(msg1);