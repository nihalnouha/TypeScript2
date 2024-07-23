"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
// const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c);
// }
// add(5, 10, 'ninja');
// const minus = (a: number, b: number): number => {
//   return a + b;
// }
// let result = minus(10,7);
// console.log(result);
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
