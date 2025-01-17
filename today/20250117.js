const fruits = ['사과', '바나나', '포도'];

fruits.forEach((fruits) => {
    console.log(fruits);
});

const numbers = [10, 20, 30];

numbers.forEach((num, index, array) => {
    console.log(`인덱스 ${index}의 값:${num}`);
});

const scores = [50, 80, 90, 70];

scores.forEach((score) => {
    if (score >= 80) {
        console.log(`합격: ${score}`);
    }
});



