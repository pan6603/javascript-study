// 숫자 배열에서 조건 필터링 
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 객체 배열에서 특정 조건 필터링 
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);