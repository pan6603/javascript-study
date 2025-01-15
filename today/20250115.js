function greet() {
    console.log("안녕하세요.");
}

greet();


function add(a, b) {
    return a + b;
}

let result = add(3, 5); 
console.log(result);

function displayMessage(message) {
    console.log(`메세지: ${message}`);
}

displayMessage("함수를 배우고 있어요!");

function greetUser(name = "사용자") {
    console.log(`안녕하세요, ${name}`);
}

greetUser();
greetUser("테스트");


setTimeout(function() {
    console.log("1초 뒤에 실행합니다.");
}, 1000);

const subtract = function(a ,b) {
    return a - b;
}

console.log(subtract(10, 4));

