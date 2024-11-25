const radius = [1, 2, 3];

// logic to clculate area (CallBack Function)
const area = function(radius){
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}

const circumeference = function(radius){
    return 2 * Math.PI * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumeference));



arr = [1,2,3,4]
// map() function takes an array of values and applies a transformation to each value in the array
const doublee = arr.map((val) => val*=2)
console.log(doublee);
// filter() function takes an array and returns a new array with only the values that meet certain criteria.
const gt2 = arr.filter((val) => val>2)
console.log(gt2);
// reduce() used it when you want to perform some operation on the elements of an array and return a single value as a result. 
const arrSum = arr.reduce((acc, curr) => acc += curr)
console.log(arrSum);
const arrMax = arr.reduce((acc, curr) => {
    if(curr>acc) acc = curr;
    return acc
},0)
console.log(arrMax)

