function add(a, b) {
    return a + b;
};

console.log(add(2, 3));

// 함수 표현식 
const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(5, 3));

// 화살표 함수
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// 익명 함수 
setTimeout(function() {
    console.log('3초 후 발생');
}, 3000);

// 함수 호출 방식 
function greet(name) {
    return 'Hello, ${name}!';
}

console.log(greet('Alice'));


