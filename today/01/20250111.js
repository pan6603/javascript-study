const obj = {
    name: 'John',
    age: 30
}; 

console.log(obj);

// 객체 추가 방법 
// 점 표기법
obj.address = 'Seoul';
console.log(obj);

// 대괄호 표기법 
obj['job'] = 'Developer';
console.log(obj);

// 객체 수정 방법 
obj.age = 35; 
console.log(obj.age);

obj['name'] = 'Alice';
console.log(obj.name);

// 객체에서 속성 삭제 
delete obj.address;
console.log(obj);

delete obj['job'];
console.log(obj);

// 속성 존재 여부 확인 
console.log('name' in obj);
console.log(obj.hasOwnProperty('age'));
console.log(obj.hasOwnProperty('address'));







