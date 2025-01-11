// 키와 값 쌍
// const person = {
//     name: "John",
//     age: 30, 
//     isEmployed: true
// };

// console.log(person.name);
// console.log(person["age"]);

// const person = {
//     name: "John",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };

// person.greet();

//객체 수정하기 
// let person = {
//     name: 'John',
//     age: 30,
// };

// person.age = 31; 
// console.log(person);


// 객체 추가하기 
// let person = {
//     name: 'John',
//     age: 30
// };

// person.address = 'New York';
// person['phone'] = '123-456-7890';

// console.log(person);

// 객체 삭제하기 
let person = {
    name: 'John',
    age: 30, 
    address: 'New York'
};

delete person.address;
console.log(person);



