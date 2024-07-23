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


let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
