let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22},
  { name: "Tom", age: 30 } 
];
let names = users.map(user => user.name);
console.log(names);

let numbers = [10, 20, 30];
let indexedValue = numbers.map((num, index) => num + index);
console.log(indexedValue);

let arr = [1, 2, 3];
let result = arr.map(x => x * 2);
console.log(result);