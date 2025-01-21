console.log(parseInt("42"));
console.log(parseInt("42.99"));
console.log(parseInt(" 42 "));

if (isNaN(parseInt("abc"))) {
    console.log("숫자가 아닙니다.");
}