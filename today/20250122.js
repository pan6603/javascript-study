// 배열의 값을 변환 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 객체 배열에서 특정 속성 추출 
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]; 

const names = users.map(user => user.name);
console.log(names);

// 인덱스 사용 
const nums = [10, 20, 30];
const withIndex = nums.map((num, index) => num + index);
console.log(withIndex);