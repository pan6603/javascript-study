// 키와 값 쌍
// const person = {
//     name: "John",
//     age: 30, 
//     isEmployed: true
// };

// console.log(person.name);
// console.log(person["age"]);

const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();

