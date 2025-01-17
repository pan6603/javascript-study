// 기본적인 메소드 
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};

person.greet();

// this 키워드의 사용 
const car = {
    brand: "Toyota",
    start: function() {
        console.log(this.brand + "가 출발합니다.");
    }
};

car.start();